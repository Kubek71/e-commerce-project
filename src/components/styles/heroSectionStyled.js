import styled from "styled-components";
import background from "../../assets/images/landingpicture.jpg";

export const HeroSection = styled.section`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;

  button {
    background: none;
    border: none;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  @media (min-width: 1024px) {
    padding: 6rem;
    button {
      font-size: 4rem;
    }
  }
`;
