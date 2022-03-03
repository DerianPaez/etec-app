import React from 'react'
import styled from 'styled-components'
import ContactForm from '../../components/Common/ContactForm'
import Banner from '../../components/Common/Banner'
import Map from '../../components/Common/Map'

const ContactStyled = styled.div`
  /*  */
`

const Contact = () => {
  return (
    <ContactStyled>
      <Banner height="40vh">
        <Map />
      </Banner>
      <div className="wrapper">
        <ContactForm />
      </div>
    </ContactStyled>
  )
}

export default Contact
