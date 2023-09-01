import React from 'react'
import { StyledHeader } from '../../styles/header'
import Title from './Title'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
        <StyledHeader>
            <Title />
            <NavBar link1={"/quiz"} link2={"/form"} link3={"/questions"}/>
        </StyledHeader>
    </>
  )
}

export default Header