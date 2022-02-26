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
      <Product
        name="Apple Iphone x  256gb"
        image="https://cdn.discordapp.com/attachments/402596575928385537/946980908202864670/klipartz_3.png"
        price="29.99"
      />
      <Product
        name="Freidora De Aire Manual"
        image="https://cdn.discordapp.com/attachments/402596575928385537/946980884496650320/klipartz_5.png"
        price="24.99"
      />
      <Product
        name="Apple iphone 6 64gb"
        image="https://cdn.discordapp.com/attachments/402596575928385537/946980884240810035/klipartz_4.png"
        price="34.99"
      />
      <Product
        name="Extractor Campana Para Cocina Electrodomestico"
        image="https://cdn.discordapp.com/attachments/402596575928385537/946980885083848805/klipartz_7.png"
        price="22.99"
      />
      <Product
        name="Olla A Presión Panasonic Blanca"
        image="https://cdn.discordapp.com/attachments/402596575928385537/946980884735746088/klipartz_6.png"
        price="37.99"
      />
    </FeaturedProductListStyled>
  )
}

export default FeaturedProductList
