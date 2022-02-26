import React from 'react'
import styled from 'styled-components'
import ProductModal from '../Modals/ProductModal'
import useModal from '../../hooks/useModal'
import { theme } from '../../theme'
import { useState, Fragment } from 'react'
import imageError from '../../assets/images/imageError.jpg'

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 250px 1fr;
  background: ${theme.colors.background};
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  transition: .3s;
  .product-image {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.stroke};
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
      height: 90%;
      object-fit: contain;
    }
  }

  .product-content {
    display: grid;
    grid-gap: 5px;
    padding: 10px;
    color: ${theme.colors.primary};
    .product-name {
      font-size: .85em;
      font-weight: normal;
    }
    .price {
      font-size: 1em;
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
      transform: scale(1.02);
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
    <Fragment>
      <ProductStyled onClick={handleClick}>
        <figure className="product-image">
          <img onError={handleImageError} loading="lazy" src={img} alt={name}/>
        </figure>
        <div className="product-content">
          <h4 className="product-name">{name}</h4>
          <div className="product-values">
            {discount && <p className="discount">{`$ ${discount}`}</p>}
            <p className="price">{`$ ${price}`}</p>
          </div>
        </div>

      </ProductStyled>
      <ProductModal product={{ id, image, name, price, stock, category, brand, discount }} isModalOpen={isOpen} closeModal={closeModal}/>
    </Fragment>
  )
}

export default Product
