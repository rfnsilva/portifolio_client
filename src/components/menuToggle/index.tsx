import React from 'react'

import {
  Container,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  MenuLink,
  MenuBtn,
  MenuBtnWrapper
} from './styles'

export interface Props {
  isOpen?: boolean
  toggle?: any
}

const MenuToggle: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <MenuLink href="/#heroSection">Home</MenuLink>
          <MenuLink href="/#servicesSection">Serviços</MenuLink>
          <MenuLink href="/#infoSection">About</MenuLink>
          <MenuLink href="/#contatoSection">Contato</MenuLink>
          <MenuLink href="/">Sign Up</MenuLink>
        </Menu>

        <MenuBtnWrapper>
          <MenuBtn>Sign In</MenuBtn>
        </MenuBtnWrapper>
      </Wrapper>
    </Container>
  )
}

export default MenuToggle
