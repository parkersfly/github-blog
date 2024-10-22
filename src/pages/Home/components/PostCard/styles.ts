import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PostCardContainer = styled(Link)`
  width: 100%;
  max-width: 41.6rem;
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
    gap: 1.6rem;

    h3 {
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
    overflow: hidden; 
    display: -webkit-box;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 4; 
    max-height: 11.6em; 
    line-height: 160%;
  }
`