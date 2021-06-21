import React, { useRef, useEffect, useState } from 'react'

import { OrbProps } from './types'

import {
  Container,
  Wrapper,
  InfoRow,
  Text,
  TopLine,
  Heading,
  Subtitle,
  Col1,
  Col2
} from './styles'

interface Size {
  width: number
  height: number
}

export interface Props {
  sizeWidth: number
}

const infoSection: React.FC<OrbProps> = ({ data = [] }) => {
  const orbRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState<Size>({ height: 500, width: 500 })

  const changeResize = () => {
    if (window.innerWidth <= 880) {
      setSize({ height: 400, width: 400 })
    } else {
      setSize({ height: 500, width: 500 })
    }
  }

  useEffect(() => {
    window.addEventListener('resize', changeResize)

    try {
      window.Orb.Start('orb-canvas', '', {
        textColour: '#ffffff',
        textHeight: 20,
        depth: 1
      })
    } catch {
      if (orbRef.current) {
        orbRef.current.style.display = 'none'
      }
    }
  }, [])

  return (
    <Container id="skillsSection">
      <Wrapper>
        <InfoRow>
          <Col1>
            <Text>
              <TopLine>SKILLS</TopLine>
              <Heading>Linguagens na qual tenho experiência</Heading>
              <Subtitle>
                Atualmente, na maior parte do tempo estou trabalhando com Nodejs
                e Typescript, com alguns frameworks como ReactJs e NestJs.
              </Subtitle>
            </Text>
          </Col1>

          <Col2 size={size.width}>
            <div ref={orbRef}>
              <canvas id="orb-canvas" height={size.height}>
                <ul>
                  {data.length &&
                    data.map((item, key) => (
                      <li key={key}>
                        <a onClick={e => e.preventDefault()}>{item}</a>
                      </li>
                    ))}
                </ul>
              </canvas>
            </div>
          </Col2>
        </InfoRow>
      </Wrapper>
    </Container>
  )
}

export default infoSection
