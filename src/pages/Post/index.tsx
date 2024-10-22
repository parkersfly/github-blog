import { PostContainer, PostContent, PostMarkdown } from "./styles";
import { Header } from "../../components/Header";
import { Details } from "./Details";
import { useIssue } from "../../contexts/IssuesContext";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  const { issueSelected } = useIssue()
  
  const markdown = issueSelected.body

  return(
    <PostContainer>
      <Header />
      <PostContent>
        <Details />
        <PostMarkdown>
          <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </PostMarkdown>
      </PostContent>
    </PostContainer>
  )
}