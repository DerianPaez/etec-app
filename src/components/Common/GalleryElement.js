import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { useNavigate } from 'react-router-dom'

const GalleryElementStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  padding: 30px 20px;
  background: linear-gradient(to right, #00000075 , #00000075), ${({ backgroundUrl }) => backgroundUrl && `url(${backgroundUrl})`};
  background-position: center;
  background-size: cover;
  min-height: 130px;
  color: ${theme.colors.secundary};
  cursor: pointer;

  h3 {
    font-size: 1em;
    font-weight: 1000;
    margin-bottom: 4px;
    color: ${theme.colors.secundary}
  }

  p {
    font-size: .9em;
  }

  @media (min-width: 768px) {
    min-height: 200px;
  }
`
const GalleryElement = ({ name, text, background, url, className }) => {
  let navigate = useNavigate()
  const handleClick = () => {
    if (url.startsWith('http') || url.startsWith('//')) {
      window.open(url)
    } else {
      navigate(url)
    }
  }
  return (
    <GalleryElementStyled onClick={handleClick} backgroundUrl={background} className={className}>
      <div className="element-content">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </GalleryElementStyled>
  )
}

export default GalleryElement
