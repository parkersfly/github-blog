import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  height: 16.8rem;
  border-radius: 1rem;
  padding: 3.2rem;

  margin-top: -9rem;

  background-color: ${({ theme }) => theme.profile};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    a {
      text-decoration: none;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: .8rem;

      color: ${({ theme }) => theme.blue};
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.blue};
        transition: border 0.2s;
      }
    }
  }

  > h1 {
    font-size: 2.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme.title};
  }
`
export const DetailsLinks = styled.div`
  height: 2.6rem;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  margin-top: .8rem;

  > div {
    display: flex;
    align-items: center;
    gap: .8rem;

    svg {
      font-size: 1.8rem; 
      color: ${({ theme }) => theme.label};
    }

    span {
      color: ${({ theme }) => theme.span};
    }
  }
`