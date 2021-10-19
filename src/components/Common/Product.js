import styled from 'styled-components'
import ProductModal from '../Modals/ProductModal'
import useModal from '../../hooks/useModal'
import { theme } from '../../theme'
import { useState } from 'react'
import imageError from '../../assets/images/imageError.jpg'

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  background: ${theme.colors.background};
  box-shadow: 0px 0px 7px 1px ${theme.colors.stroke};
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  transition: .3s;
  .product-image {
    display: block;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-content {
    display: grid;
    grid-gap: 5px;
    padding: 10px;
    h4 {
      font-size: .95em;
      font-weight: 600;
      line-height: 1.4rem;
    }
    .price {
      font-size: 1.2em;
      font-weight: 800;
    }
    .discount {
      text-decoration: line-through;
      font-size: 1em;
      font-weight: normal;
      color: #BCBCBC;
    }
  }

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`
const Product = ({ id, image, name, price, stock, category, brand, discount }) => {
  const [img, setImg] = useState(image)
  const { isOpen, openModal, closeModal } = useModal()
  const handleClick = () => {
    openModal()
  }
  const handleImageError = () => {
    setImg(imageError)
  }
  return (
    <>
      <ProductStyled onClick={handleClick}>
        <figure className="product-image">
          <img onError={handleImageError} loading="lazy" src={img} alt={name}/>
        </figure>
        <div className="product-content">
          <h4>{name}</h4>
          <div className="product-values">
            {discount && <p className="discount">{`$ ${discount}`}</p>}
            <p className="price">{`$ ${price}`}</p>
          </div>
        </div>

      </ProductStyled>
      <ProductModal product={{ id, image, name, price, stock, category, brand, discount }} isModalOpen={isOpen} closeModal={closeModal}/>
    </>
  )
}

export default Product
