import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const LayoutStyled = styled.div`
  /*  */
  main {
    padding-top: 68px;
  }
`
const Layout = () => {
  return (
    <LayoutStyled>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </LayoutStyled>
  )
}

export default Layout
