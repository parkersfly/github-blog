import { styled } from "styled-components";

export const PostCardContainer = styled.a`
  height: 26rem;
  background: ${({ theme }) => theme.post};
  border-radius: 1rem;
  padding: 3.2rem;
  cursor: pointer;

  border: 2px solid transparent;

  text-decoration: none;
  color: ${({ theme }) => theme.text};
  
  &:hover {
    border: 2px solid ${({ theme }) => theme.label};
    transition: border 0.3s ease;
  }

  > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    h3 {
      width: 28.3rem;
      font-size: 2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.title};
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.span};
    }
  }

  > main {
    overflow: hidden; /* Esconde o texto que sai da div */
    display: -webkit-box; /* Necessário para o flexbox em navegadores antigos */
    -webkit-box-orient: vertical; /* Define a orientação do box */
    -webkit-line-clamp: 4; /* Número máximo de linhas */
    max-height: 11.6em; 
    line-height: 160%;
  }
`