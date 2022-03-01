import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import Icon from './Icon'

const ContactInfoItemStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  gap: 10px;

  p {
    font-size: 1.1em;
  }
`

const ContactInfoItem = ({ icon, text, className }) => {
  return (
    <ContactInfoItemStyled className={className}>
      <Icon icon={icon} width="50" height="50" color={theme.colors.primary}/>
      <p>{text}</p>
    </ContactInfoItemStyled>
  )
}

export default ContactInfoItem
