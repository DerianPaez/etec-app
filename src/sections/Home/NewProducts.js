import React from 'react'
import styled from 'styled-components'
import FeaturedProductList from '../../components/Lists/FeaturedProductList'

const NewProductsStyled = styled.section`
  /*  */
`
const NewProducts = () => {
  return (
    <NewProductsStyled>
      <div className="wrapper">
        <div className="new-products-content">
          <h2>Productos Nuevos</h2>
          <FeaturedProductList />
        </div>
      </div>
    </NewProductsStyled>
  )
}

export default NewProducts
