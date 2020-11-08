import React from 'react'
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
  return (
    <>
      <Wrapper>
        <Container>
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
        </Container>
      </Wrapper>

      {/* <Container>
        <img src={image} alt="logo do site" />

        <label className="switch">
          <input type="checkbox" onChange={handleChange} />
          <div>
            <span></span>
          </div>
        </label>

        <nav>
          <ul className="menuItems">
            <li>
              <a href="#" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="#" data-item="Projects">
                Projetos
              </a>
            </li>
            <li>
              <a href="#" data-item="Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#" data-item="Contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Container> */}
    </>
  )
}

export default NavBar
