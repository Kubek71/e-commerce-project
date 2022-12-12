import styled from "styled-components";
export const CategoryButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.lightPurple};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.regular};
  border: none;
  position: relative;
  font-size: 1.5rem;
  letter-spacing: 1px;

  a {
    cursor: pointer;
    text-transform: uppercase;
  }

  &:after {
    ${({ openCategories }) =>
      openCategories === false ? 'content: ">>";' : 'content: "<<";'};
    color: ${({ theme }) => theme.colors.lightPurple};
    position: absolute;
    top: 0;
    ${({ openCategories }) =>
      openCategories === false ? "right: -25%;" : "left: -25%;"}
  }
`;
