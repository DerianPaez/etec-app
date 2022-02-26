import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const PublicityStyled = styled.div`
  background: linear-gradient(to right, #00000075 , #00000075), ${({ backgroundUrl }) => backgroundUrl && `url(${backgroundUrl})`};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  padding: 60px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    padding: 60px 40px;
  }
`

const Publicity = ({ children, image }) => {
  return (
    <PublicityStyled backgroundUrl={image}>
      {children}
    </PublicityStyled>
  )
}

export default Publicity
