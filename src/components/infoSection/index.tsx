import React from 'react'
import Image from 'next/image'

import {
  Container,
  Wrapper,
  InfoRow,
  Text,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Col1,
  Col2,
  ImgWrapper,
  Button
} from './styles'

const infoSection: React.FC = () => {
  return (
    <Container id="infoSection">
      <Wrapper>
        <InfoRow>
          <Col1>
            <Text>
              <TopLine>Lorem Ipsum</TopLine>
              <Heading>simply dummy text of the printing and</Heading>
              <Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum.
              </Subtitle>
              <BtnWrapper>
                <Button>Ver Mais</Button>
              </BtnWrapper>
            </Text>
          </Col1>

          <Col2>
            <ImgWrapper>
              <Image
                src="/car.svg"
                width="400"
                height="400"
                alt="Profile Picture"
              />
              {/* <img src={imageCar} alt="imagem de um carro" /> */}
            </ImgWrapper>
          </Col2>
        </InfoRow>
      </Wrapper>
    </Container>
  )
}

export default infoSection
