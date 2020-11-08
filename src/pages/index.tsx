import React, { useState } from 'react'
import Head from 'next/head'

import NavBar from '../components/navbar'
import MenuToggle from '../components/menuToggle'
import HeroSection from '../components/heroSection'
import InfoSection from '../components/infoSection'
import ServicesSection from '../components/servicesSection'
import Footer from '../components/footer'

import { Container } from '../styles/pages/index'

/*
export async function getServerSideProps(ctx) {
  const { cookie } = new Cookie(ctx)

  const userCookie = cookie.get('user') ? cookie.get('user') : ''

  if (userCookie) {
    ctx.res.setHeader('location', '/user/dashboard')
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  return { props: { userCookie } }
}
*/

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <Footer />
    </Container>
  )
}
