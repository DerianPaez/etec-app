import React from 'react'
import styled from 'styled-components'
import We from '../../sections/About/We'
import Values from '../../sections/About/Values'
import AboutBanner from '../../sections/About/AboutBanner'
import AboutPublicity from '../../sections/About/AboutPublicity'
import AboutSocialMedia from '../../sections/About/AboutSocialMedia'
import Testimonials from '../../sections/About/Testimonials'

const AboutStyled = styled.div`
  /*  */
`
const About = () => {
  return (
    <AboutStyled>
      <AboutBanner/>
      <We/>
      <AboutPublicity/>
      <Values/>
      <AboutSocialMedia/>
      <Testimonials/>
    </AboutStyled>
  )
}

export default About
