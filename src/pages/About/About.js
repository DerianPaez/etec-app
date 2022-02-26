import React from 'react'
import styled from 'styled-components'
import We from '../../sections/About/We'
import Values from '../../sections/About/Values'
import ChooseUs from '../../sections/About/ChooseUs'
import Contact from '../../sections/Contact'
import AboutBanner from '../../sections/Home/AboutBanner'

const AboutStyled = styled.div`
  /*  */
`
const About = () => {
  return (
    <AboutStyled>
      <AboutBanner/>
      <We/>
      <Values/>
      <ChooseUs/>
      <Contact/>
    </AboutStyled>
  )
}

export default About
