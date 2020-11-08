import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import NavBar from '../components/navbar'
import HeroSection from '../components/heroSection'
import InfoSection from '../components/infoSection'
import ServicesSection from '../components/servicesSection'
import Footer from '../components/footer'

import { Container } from '../styles/pages/index'

import { SKILLS } from '../config/dataSkills'
const SkillSection = dynamic(() => import('../components/skillsSection'))

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
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <NavBar />
      <HeroSection />
      <InfoSection />
      <SkillSection data={SKILLS} />
      <ServicesSection />
      <Footer />
    </Container>
  )
}
