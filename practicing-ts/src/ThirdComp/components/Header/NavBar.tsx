import React from "react";
import { Link } from "react-router-dom";
import { StyledNavBar } from "../../styles/header";

interface IProps {
  link1: string;
  link2: string;
  link3: string;
}

const NavBar = ({ link1, link2, link3 }: IProps) => {
  return (
    <>
      <StyledNavBar>
        <Link to={link1}><span>Fazer o quiz</span></Link>
        <Link to={link2}><span>Cadastrar Perguntas</span></Link>
        <Link to={link3}><span>Listar Perguntas</span></Link>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
