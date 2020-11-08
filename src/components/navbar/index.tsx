import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

import {
  Wrapper,
  Container,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from './styles'

interface Props {
  toggle?: any
}

const NavBar: React.FC<Props> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeScrollNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeScrollNav)
  }, [])

  return (
    <Container scrollNav={scrollNav}>
      <Wrapper>
        <Logo>dolla</Logo>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Serviços</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contato</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Sign Up</NavLink>
          </NavItem>
        </NavMenu>

        <NavBtn>
          <NavBtnLink> Sign In </NavBtnLink>
        </NavBtn>
      </Wrapper>
    </Container>
  )
}

export default NavBar
