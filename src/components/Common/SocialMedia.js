import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from './Icon'

const SocialMediaStyled = styled.div`
  width: 100%;
  display: none;
  justify-content: flex-end;
  align-self: center;
  gap: 10px;
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`

const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <figure>
        <Link to="https://www.facebook.com/Encuentralotodoecuador" target="_blank">
          <Icon icon="facebook" width="30" height="30" color="white"/>
        </Link>
      </figure>
      <figure>
        <Link to="https://www.instagram.com/encuentralotodoecuador/" target="_blank">
          <Icon icon="instagram" width="30" height="30" color="white"/>
        </Link>
      </figure>
      <figure>
        <Link to="https://wa.me/593978982122" target="_blank">
          <Icon icon="whatsapp" width="30" height="30" color="white"/>
        </Link>
      </figure>
    </SocialMediaStyled>
  )
}

export default SocialMedia
