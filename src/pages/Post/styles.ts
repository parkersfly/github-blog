import styled from "styled-components";

export const PostContainer = styled.div``

export const PostContent = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;
`

export const PostMarkdown = styled.div`
  padding: 4rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > h2 {
    width: max-content;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.blue};
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }


pre {
    background: ${({ theme }) => theme.post};
    padding: 1.6rem;
    border-radius: 2px;
}
`