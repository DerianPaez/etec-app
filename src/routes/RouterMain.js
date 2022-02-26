import React, { useLayoutEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { Home, About, Products, Contact } from '../pages'
import Layout from '../components/Common/Layout'

const Wrapper = ({children}) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const RouterMain = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/nosotros" element={<About />}/>
            <Route path="/productos" element={<Products />}/>
            <Route path="/productos" element={<Products />}/>
            <Route path="/contacto" element={<Contact />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default RouterMain
