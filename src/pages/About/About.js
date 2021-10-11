import styled from 'styled-components'
import Values from '../../sections/About/Values'
import ChooseUs from '../../sections/About/ChooseUs'

const AboutStyled = styled.div`
  /*  */
`
const About = () => {
  return (
    <AboutStyled>
      <Values/>
      <ChooseUs/>
    </AboutStyled>
  )
}

export default About
