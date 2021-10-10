import styled from 'styled-components'
import Link from './Link'

const LogoStyled = styled.div`
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
    <Link to="/">
      <LogoStyled>
        <p>ETEC</p>
      </LogoStyled>
    </Link>
  )
}

export default Logo
