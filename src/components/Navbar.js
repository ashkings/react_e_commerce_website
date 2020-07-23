import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

class Navbar extends Component {
  render() {
    return (
      <Navwrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
        <Link to="/">
          <img src={logo} className="navbar-brand" alt="store" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Navwrapper>
    );
  }
}

const Navwrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-tranistion: capitalize;
  }
`;

export default Navbar;
