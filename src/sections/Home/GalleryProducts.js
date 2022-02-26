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
            name="Electrodomesticos"
            text="Cocinas, Refrigeradores, Extractores, Congeladores, etc."
            background="https://cdn.discordapp.com/attachments/402596575928385537/946985070093279312/home.png"
          />
          <GalleryElement
            className="products-2"
            name="Tecnología"
            text="Celulares, Laptops, Tablets, etc."
            background="https://cdn.discordapp.com/attachments/402596575928385537/946985070579826748/tech.png"
          />
          <GalleryElement
            className="products-3"
            name="Vestimenta"
            text="Gucci, HM, Nike, Adidas, Etc."
            background="https://cdn.discordapp.com/attachments/402596575928385537/946985071292854272/clothes.png"
          />
          <GalleryElement
            className="products-4"
            name="Maquillaje"
            text="HM, Kilye Cosmetics, etc."
            background="https://cdn.discordapp.com/attachments/402596575928385537/946985071020236860/makeup.png"
          />
          <GalleryElement
            className="products-5"
            name="Salud"
            text="Fybeca, Sana sana, Cruz Azul, etc."
            background="https://cdn.discordapp.com/attachments/402596575928385537/946985850468728832/cream.49b8815a8c5a6eb48d36.jpg"
          />
        </div>
      </div>
    </GalleryProductsStyled>
  )
}

export default GalleryProducts
