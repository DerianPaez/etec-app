import React from 'react'
import styled from 'styled-components'
import GalleryElement from '../../components/Common/GalleryElement'
import cream from '../../static/images/cream.jpg'

const GalleryProductsStyled = styled.section`
  .gallery-products-container {
    display: grid;
    grid-gap: 20px;
    @media (min-width: 768px) {
      grid-template-areas:
        'product-1 product-1 product-2 product-5 product-5'
        'product-3 product-4 product-4 product-5 product-5';
      .products-1 {
        grid-area: product-1;
      }
      .products-2 {
        grid-area: product-2;
      }
      .products-3 {
        grid-area: product-3;
      }
      .products-4 {
        grid-area: product-4;
      }
      .products-5 {
        grid-area: product-5;
      }
    }
  }
`
const GalleryProducts = () => {
  return (
    <GalleryProductsStyled>
      <div className="wrapper">
        <div className="gallery-products-container">
          <GalleryElement
            className="products-1"
            type="Cocina"
            name="Cocina electrica"
            background={cream}
          />
          <GalleryElement
            className="products-2"
            type="Cocina"
            name="Cocina electrica"
            background={cream}
          />
          <GalleryElement
            className="products-3"
            type="Cocina"
            name="Cocina electrica"
            background={cream}
          />
          <GalleryElement
            className="products-4"
            type="Cocina"
            name="Cocina electrica"
            background={cream}
          />
          <GalleryElement
            className="products-5"
            type="Cocina"
            name="Cocina electrica"
            background={cream}
          />
        </div>
      </div>
    </GalleryProductsStyled>
  )
}

export default GalleryProducts
