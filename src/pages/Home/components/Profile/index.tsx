import { ProfileContainer, ProfileContent, ProfileLinks } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Profile(){
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src="https://github.com/diego3g.png" alt="" />

        <div className="profile-details">
          <div className="profile-details-title">
            <span>Cameron Williamson</span>

            <a href="#">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
            </a>
          </div>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean 
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <ProfileLinks>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </ProfileLinks>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}