import { Header } from "../../components/Header";
import { useIssue } from "../../contexts/IssuesContext";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";

export function Home(){
  const { issues } = useIssue()

  console.log(issues)

  return(
    <HomeContainer>
      <Header />
      <Profile />
      <SearchForm />

      <main>
        {
          issues.map((issue) => {
            const { id, title, created_at, body: description } = issue
            return (
              <PostCard 
                key={id} 
                title={title} 
                created_at={created_at} 
                description={description} 
              />
            )
          })
        }
      </main>
    </HomeContainer>
  )
}