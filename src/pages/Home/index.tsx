import { useEffect } from "react";
import { Header } from "../../components/Header";
import { useIssue } from "../../contexts/IssuesContext";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";

export function Home(){
  const { issues } = useIssue()

  useEffect(() => {
    console.log(issues)
  }, [issues])

  return(
    <HomeContainer>
      <Header />
      <Profile />
      <SearchForm />

      <main>
        { issues.length > 0 &&
          (issues.map((issue) => {
            return (
              <PostCard 
                key={issue.id} 
                data={issue} 
              />
            )
          }))
        }
      </main>
    </HomeContainer>
  )
}