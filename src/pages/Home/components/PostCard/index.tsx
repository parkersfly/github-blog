import { formatDistanceToNow } from "date-fns";
import { PostCardContainer } from "./styles";
import { ptBR } from "date-fns/locale";
import Markdown from 'react-markdown'

interface PostCardProps {
  data: {
    number: number
    title: string 
    body: string 
    created_at: string
  }
}

export function PostCard({ data }: PostCardProps) {
  const { number: issueNumber, body, title, created_at } = data

  const formattedText = body
  const formattedDate = formatDistanceToNow(created_at, { addSuffix: true, locale: ptBR });

  return (
    <PostCardContainer to={`/post/${issueNumber}`} onClick={() => console.log("a")}>
      <header>
        <h3>{ title }</h3>
        <span>{ formattedDate }</span>
      </header>

      <main>
        <Markdown>{formattedText}</Markdown>
      </main>
    </PostCardContainer>
  )
}