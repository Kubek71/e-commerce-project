import styled from "styled-components";
export const CategoryButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.regular};
  border: none;
  position: relative;
  font-size: 1.5rem;
  letter-spacing: 1px;
  padding: 0;

  a {
    cursor: pointer;
    text-transform: uppercase;
  }
`;
