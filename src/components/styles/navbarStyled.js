import styled from "styled-components";
export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;

  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
    position: fixed;
    top: -100vh;
    left: 0;
    transition: 0.5s;
  }
  a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.lightPurple};
    font-weight: ${({ theme }) => theme.fonts.regular};
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .nav-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem;
  }
`;
