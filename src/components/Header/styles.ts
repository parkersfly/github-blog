import styled from "styled-components";
import cover from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 29.6rem;

  padding-top: 5.7rem;

  background-image: url(${cover});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
`