import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home, About, Products, Contact } from '../pages'
import Layout from '../components/Common/Layout'

const RouterMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/nosotros" element={<About />}/>
          <Route path="/productos" element={<Products />}/>
          <Route path="/productos" element={<Products />}/>
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterMain
