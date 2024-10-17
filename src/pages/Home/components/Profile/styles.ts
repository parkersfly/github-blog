import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 86.4rem;
  height: 21.2rem;

  background-color: ${({ theme }) => theme.profile};
  border-radius: 10px;

  margin: -9rem auto 0;
  padding: 3.2rem 3.2rem 3.2rem 4rem ; 
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  > img {
    width: 14.8rem;
    height: 14.8rem;

    border-radius: 8px;
    object-fit: cover;
  }

  .profile-details {
    .profile-details-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .8rem;
      font-weight: bold;

      span {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.title};
      }

      a {
        text-decoration: none;
        font-size: 1.2rem; 
        line-height: 160%;
        color: ${({ theme }) => theme.blue};

        display: flex;
        align-items: center;
        gap: .8rem;
        
        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.blue};
        }
      }
    }
  }
`

export const ProfileLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  margin-top: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    gap: .8rem;

    svg {
      font-size: 1.8rem; 
      color: ${({ theme }) => theme.label};
    }

    span {
      color: ${({ theme }) => theme.subtitle};
    }
  }
`