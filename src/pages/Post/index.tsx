import { PostContainer, PostContent } from "./styles";
import { Header } from "../../components/Header";
import { Details } from "./Details/indes";

export function Post() {
  return(
    <PostContainer>
      <Header />
      <PostContent>
        <Details />
      </PostContent>
    </PostContainer>
  )
}