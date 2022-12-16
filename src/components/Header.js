import React from "react";
import { HeaderStyled } from "./styles/headerStyled";
import { NavbarStyled, UserListElement } from "./styles/navbarStyled";
import { CategoryButton } from "./styles/categoryButton";
import { FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";
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
        <ul>
          <UserListElement>
            <button>
              <FaUser />
            </button>
            <button className="nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </UserListElement>
          <li>
            <CategoryButton
              openCategories={openCategories}
              onClick={() => {
                setOpenCategories((currentState) => !currentState);
              }}
            >
              Kategorie
            </CategoryButton>
          </li>

          {openCategories === true ? (
            <>
              <li>
                <a>Kurtki</a>
              </li>
              <li>
                <a>Torby</a>
              </li>
              <li>
                <a>Koszulki</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a>Galeria</a>
              </li>
              <li>
                <a>Kontakt</a>
              </li>
              <li>
                <a>Regulamin</a>
              </li>
            </>
          )}
        </ul>
      </NavbarStyled>

      <button className="nav-menu-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <button className="nav-cart-btn">
        <FaShoppingCart />
      </button>
    </HeaderStyled>
  );
};

export default Header;
