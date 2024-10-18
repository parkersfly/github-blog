import { ProfileContainer, ProfileContent, ProfileLinks } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface Profile {
  avatar_url: string
  name: string
  login: string
  bio: string
  company: string
  followers: number
  html_url: string
}

export function Profile(){
  const [profile, setProfile] = useState<Profile>({
    avatar_url: "",
    name: "",
    login: "",
    bio: "",
    company: "",
    followers: 0,
    html_url: "",
  })

  console.log(profile)
  
  useEffect(() => {
    async function fetchUserData(){
      const response = await api.get("/users/parkersfly")

      setProfile(response.data)
    }

    fetchUserData()
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={profile.avatar_url} alt="" />

        <div className="profile-details">
          <div className="profile-details-title">
            <span>{profile.name}</span>

            <a href={profile.html_url}>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
            </a>
          </div>

          <p>{profile.bio}</p>

          <ProfileLinks>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile.login}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>
                {profile.company ? profile.company : "Freelancer"}
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{profile.followers} seguidores</span>
            </div>
          </ProfileLinks>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}