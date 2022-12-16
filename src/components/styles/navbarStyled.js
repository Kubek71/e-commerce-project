import styled from "styled-components";
export const NavbarStyled = styled.nav`
  position: relative;
  width: 100%;
  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
    position: fixed;
    top: -100vh;
    left: 0;
    transition: 0.5s;

    ul {
      width: 100%;
      flex-direction: column;

      li {
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0;

    li {
      text-align: left;
      list-style-type: none;
      padding: 0.5rem 1rem;
    }
  }

  a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: ${({ theme }) => theme.fonts.regular};
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

export const UserListElement = styled.li`
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
