import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background: linear-gradient(
    90deg,
    rgba(163, 11, 76, 1) 27%,
    rgba(169, 12, 41, 1) 100%
  );
  height: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const StyledLogo = styled.img`
  height: 60%; /* Cambiar a un porcentaje más bajo si es necesario */
  max-height: 50px; /* Limitar la altura máxima */
  width: auto; /* Mantener la proporción */
  object-fit: contain; /* O usa cover si prefieres */
`;

const StyledToogledNavbar = styled.div`
  background: linear-gradient(
    90deg,
    rgba(163, 11, 76, 1) 27%,
    rgba(169, 12, 41, 1) 100%
  );
`;
const Navbar = () => {
  return (
    <StyledNavbar
      className="navbar navbar-expand-lg bg-dark fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <StyledLogo src="./logo.png" alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        < StyledToogledNavbar className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to={"/"}>
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/new-short-url">
                New{" "}
              </NavLink>
            </li>
          </ul>
        </ StyledToogledNavbar>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
