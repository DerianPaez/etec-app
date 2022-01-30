import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const LogoStyled = styled.div`
  width: min-content;
  user-select: none;
  cursor: pointer;
  p {
    font-size: 24px;
    line-height: 2rem;
    letter-spacing: .3rem;
    font-weight: 700;
  }
`
const Logo = () => {
  return (
    <LogoStyled>
      <Link to="/">
        <p>ETEC</p>
      </Link>
    </LogoStyled>
  )
}

export default Logo
