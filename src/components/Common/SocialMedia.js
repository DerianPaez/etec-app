import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from './Icon'

const SocialMediaStyled = styled.div`
  width: 100%;
  display: none;
  justify-content: flex-end;
  align-self: center;
  gap: 5px;
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <figure>
        <Link to="">
          <Icon icon="facebook" width="25" height="25" color="white"/>
        </Link>
      </figure>
      <figure>
        <Link to="">
          <Icon icon="instagram" width="25" height="25" color="white"/>
        </Link>
      </figure>
      <figure>
        <Link to="">
          <Icon icon="whatsapp" width="25" height="25" color="white"/>
        </Link>
      </figure>
    </SocialMediaStyled>
  )
}

export default SocialMedia
