import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

import {
  Container,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinksItems,
  LinksItemsTitle,
  Links,
  SocialIconLink,
  SocialIcons,
  WebSite,
  SocialLogo,
  SocialMediaWrapper,
  SocialMedia
} from './styles'

const footer: React.FC = () => {
  return (
    <Container id="footer">
      <Wrapper>
        {/* <LinksContainer>
          <LinksWrapper>
            <LinksItems>
              <LinksItemsTitle>About Us</LinksItemsTitle>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
            </LinksItems>

            <LinksItems>
              <LinksItemsTitle>About Us</LinksItemsTitle>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
            </LinksItems>
          </LinksWrapper>

          <LinksWrapper>
            <LinksItems>
              <LinksItemsTitle>About Us</LinksItemsTitle>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
            </LinksItems>

            <LinksItems>
              <LinksItemsTitle>About Us</LinksItemsTitle>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
              <Links>about us</Links>
            </LinksItems>
          </LinksWrapper>
        </LinksContainer> */}

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo>Ricardo</SocialLogo>
            <WebSite>Ricardo Dev @ {new Date().getFullYear()}</WebSite>
            <SocialIcons>
              <SocialIconLink href="#" target="_blank" arial-label="facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="#" target="_blank" arial-label="instagram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="#" target="_blank" arial-label="youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="#" target="_blank" arial-label="twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="#" target="_blank" arial-label="linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </Wrapper>
    </Container>
  )
}

export default footer
