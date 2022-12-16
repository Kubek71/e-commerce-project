import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  .nav-menu-btn {
    background: none;
    border: none;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  .nav-cart-btn {
    background: none;
    border: none;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  @media (min-width: 1024px) {
    .nav-close-btn,
    .nav-menu-btn {
      visibility: hidden;
      opacity: 0;
    }
  }

  .responsive-nav {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(100vh);
    background: ${({ theme }) => theme.colors.lightPurple};
  }
`;
