import React from 'react'
import styled from 'styled-components'
import Main from '../../sections/Products/Main'

const ProductsStyled = styled.div`
  padding-top: 52px;
`
const Products = () => {
  return (
    <ProductsStyled>
      <Main/>
    </ProductsStyled>
  )
}

export default Products
