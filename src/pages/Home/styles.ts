import { styled } from "styled-components";

export const HomeContainer = styled.div`
  > main {
    width: 100%;
    max-width: 86.4rem;
    flex-wrap: wrap;

    margin: 0 auto;
    padding-top: 4.8rem;
    padding-bottom: 23.4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
  }
`