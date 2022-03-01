import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import { theme } from '../../theme'
import logo from '../../assets/images/logo.png'

const LogoStyled = styled.figure`
  width: min-content;
  user-select: none;
  cursor: pointer;
  z-index: ${theme.position.logo};
  img {
    width: 160px;
  }
`
const Logo = ({ className }) => {
  return (
    <LogoStyled className={className}>
      <Link to="/">
        <img src={logo} alt="Logo Etec Rojo" />
      </Link>
    </LogoStyled>
  )
}

export default Logo
