import React from 'react'
import styled from 'styled-components'
import FeaturedProductList from '../../components/Lists/FeaturedProductList'

const FeaturedProductsStyled = styled.main`
  padding: 40px 0;
`
const FeaturedProducts = () => {
  return (
    <FeaturedProductsStyled>
      <div className="wrapper">
        <div className="featured-products-content">
          <h2>Productos Destacados</h2>
          <FeaturedProductList />
        </div>
      </div>
    </FeaturedProductsStyled>
  )
}

export default FeaturedProducts
