import styled from 'styled-components'

const LogoStyled = styled.div`
  p {
    font-size: 24px;
    line-height: 2rem;
    letter-spacing: .3rem;
  }
`
const Logo = () => {
  return (
    <LogoStyled>
      <p>ETEC</p>
    </LogoStyled>
  )
}

export default Logo
