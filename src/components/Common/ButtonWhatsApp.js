import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const ButtonWhatsAppStyled = styled.button`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  line-height: 25px;
  grid-gap: 10px;
  width: min-content;
  background-color: #25D366;
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 500;
  min-width: 250px;
  text-align: left;
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ButtonWhatsApp = ({ product }) => {
  product.discount = 10
  const message = `Hola, estoy interesado en el siguiente producto
  *${product && product.name}*
  Precio: $ ${product && product.price} ~$ ${product && product.discount}~
  Categoría: ${product && product.category}
  Imagen: ${product && product.image}
  Código: ${product && product.id}`
  const url = `https://wa.me/5930962852852?text=${encodeURI(message)}`
  const handleClick = () => {
    window.open(url, '_blank');
  }
  return (
    <ButtonWhatsAppStyled type="button" onClick={handleClick}>
      <Icon icon="whatsapp" width="25" height="25" color="white"/> Reservar por WhatsApp
    </ButtonWhatsAppStyled>
  )
}

export default ButtonWhatsApp
