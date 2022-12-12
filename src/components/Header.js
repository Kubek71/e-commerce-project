import React from "react";
import { HeaderStyled } from "./styles/headerStyled";
import { NavbarStyled } from "./styles/navbarStyled";
import { CategoryButton } from "./styles/categoryButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";

const Header = () => {
  const navRef = useRef();
  const [openCategories, setOpenCategories] = useState(false);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <HeaderStyled>
      <NavbarStyled ref={navRef}>
        <CategoryButton
          openCategories={openCategories}
          onClick={() => {
            setOpenCategories((currentState) => !currentState);
          }}
        >
          Kategorie
        </CategoryButton>

        {openCategories === true ? (
          <>
            <a>Kurtki</a>
            <a>Torby</a>
            <a>Koszulki</a>
          </>
        ) : (
          <>
            <a>Galeria</a>
            <a>Kontakt</a>
            <a>Regulamin</a>
          </>
        )}

        <button className="nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </NavbarStyled>

      <button className="nav-menu-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </HeaderStyled>
  );
};

export default Header;
