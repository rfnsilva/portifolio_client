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
              <TopLine>Premium Bank</TopLine>
              <Heading>Unlimeted transactions with zero fees</Heading>
              <Subtitle>
                Get acess to our exclusive app that allows you to send unlimited
                transactions without getting charged any fees.
              </Subtitle>
              <BtnWrapper>
                <Button>Get started</Button>
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
