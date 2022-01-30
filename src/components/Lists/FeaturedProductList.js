import React from 'react'
import styled from 'styled-components'
import Product from '../Common/Product'
import champu from '../../static/images/champu.jpg'

const FeaturedProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: min-content;
  justify-content: stretch;
  gap: 20px;
`
const FeaturedProductList = () => {
  return (
    <FeaturedProductListStyled>
      <Product name="Pulidora de uñas Mercedes" price="29,99" discount="30,00"/>
      <Product name="Bandas de resistencia" price="22,99" discount="28,00"/>
      <Product name="Dopler fetal" price="37,99"/>
      <Product name="Kit de sutura" price="24,99"/>
      <Product name="Masajeadores corporales" price="34,99"/>
    </FeaturedProductListStyled>
  )
}

export default FeaturedProductList
