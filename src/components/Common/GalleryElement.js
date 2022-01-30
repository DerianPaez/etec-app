import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const GalleryElementStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-image: ${({ background }) => (background && `url(${background})`)};
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  background-color: blue;
  min-height: 130px;
  p {
    margin-bottom: 5px;
  }
  @media (min-width: 768px) {
    min-height: 200px;
  }
`
const GalleryElement = ({ type, name, background, className }) => {
  return (
    <GalleryElementStyled background={background} className={className}>
      <div className="element-content">
        <h3>{type}</h3>
        <p>{name}</p>
        <Button type="button">Comprar</Button>
      </div>
    </GalleryElementStyled>
  )
}

export default GalleryElement
