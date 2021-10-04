import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const LayoutStyled = styled.div`
  /*  */
`
const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header/>
      { children }
      <Footer/>
    </LayoutStyled>
  )
}

export default Layout
