import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import MenuToggle from '../menuToggle'

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

const NavBar: React.FC = () => {
  const [scrollNav, setScrollNav] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

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
    <>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <Container scrollNav={scrollNav}>
        <Wrapper>
          <Logo>Ricardo</Logo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink href="/#heroSection">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#infoSection">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#skillsSection">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#servicesSection">Serviços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contato</NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink> Sign In </NavBtnLink>
          </NavBtn>
        </Wrapper>
      </Container>
    </>
  )
}

export default NavBar
