import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { theme } from '../../theme'

const TestimonyStyled = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0px 2px 15px 0px #bfbaba;
  .line {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 40px;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }
  .testimony-container {
    display: grid;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-left: 40px;
    .testimony-image-container {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #000;
      justify-self: center;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
  .testimony-content {
    display: grid;
    gap: 10px;
    .testimony-quotes {
      justify-self: flex-start;
    }
  }

  @media (min-width: 1024px) {
    .line {
      width: 60px;
    }
    .testimony-container {
      grid-template-columns: max-content 1fr;
      padding: 30px 20px;
      gap: 20px;
      .testimony-image-container {
        width: 140px;
        height: 140px;
        margin-left: -40px;
      }
    }
    .testimony-content {
      gap: 20px;
      p {
        font-weight: bold;
      }
    }
  }

  @media (min-width: 1240px) {
    .testimony-container {
      .testimony-image-container {
        width: 160px;
        height: 160px;
      }
    }
  }
`

const Testimony = ({ image, text, name}) => {
  return (
    <TestimonyStyled>
      <div className="line"></div>
      <div className="testimony-container">
        <figure className="testimony-image-container">
          <img src={image} alt={name} />
        </figure>
        <div className="testimony-content">
          <Icon className="testimony-quotes" icon="quotes" width="40" height="40" color="#323E4D"/>
          <p>{text}</p>
          <p className="points">...</p>
          <h4>{name}</h4>
        </div>
      </div>
    </TestimonyStyled>
  )
}

export default Testimony
