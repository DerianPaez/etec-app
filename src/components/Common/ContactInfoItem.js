import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import Icon from './Icon'
import Link from './Link'

const ContactInfoItemStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  gap: 10px;

  p {
    font-size: .9em;

    @media (min-width: 768px) {
      font-size: 1.1em;
    }
  }
`

const ContactInfoItem = ({ className, icon, text, url }) => {

  const HTML = (
    <ContactInfoItemStyled className={className}>
      <Icon icon={icon} width="50" height="50" color={theme.colors.primary}/>
      <p>{text}</p>
    </ContactInfoItemStyled>
  )

  if(url) {
    return (
      <Link url={url}>{HTML}</Link>
    )
  }

  return HTML
}

export default ContactInfoItem
