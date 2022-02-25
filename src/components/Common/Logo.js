import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import { theme } from '../../theme'
import logo from '../../assets/images/logo.png'

const LogoStyled = styled.div`
  width: min-content;
  user-select: none;
  cursor: pointer;
  z-index: ${theme.position.logo};
  img {
    width: 160px;
  }
`
const Logo = () => {
  return (
    <LogoStyled>
      <Link to="/">
        <img src={logo} alt="Logo Etec Rojo" />
      </Link>
    </LogoStyled>
  )
}

export default Logo
