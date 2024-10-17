import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;

  padding-top: 7.2rem;
`

export const SearchFormContent = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.2rem;

    strong {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.4rem;
      color: 1px solid ${({ theme }) => theme.span};
    }
  }

  input {
    width: 100%;
    height: 5rem;

    background: ${({ theme }) => theme.input};
    border: 1px solid ${({ theme }) => theme.input};
    border-radius: 6px;
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.title};

    &::placeholder {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.label};
    }
  }
`