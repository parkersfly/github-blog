import { PostCardContainer } from "./styles";

interface PostCardProps {
  title: string 
  description: string 
  created_at: string
}

export function PostCard({ title, description, created_at }: PostCardProps) {
  return (
    <PostCardContainer href="/post">
      <header>
        <h3>{ title }</h3>
        <span>{ created_at }</span>
      </header>

      <main>
        <p>{ description }</p>
      </main>
    </PostCardContainer>
  )
}