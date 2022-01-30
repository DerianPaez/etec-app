import React from 'react'
import styled from 'styled-components'
import We from '../../sections/About/We'
import Values from '../../sections/About/Values'
import ChooseUs from '../../sections/About/ChooseUs'
import Contact from '../../sections/Contact'

const AboutStyled = styled.div`
  /*  */
`
const About = () => {
  return (
    <AboutStyled>
      <We/>
      <Values/>
      <ChooseUs/>
      <Contact/>
    </AboutStyled>
  )
}

export default About
