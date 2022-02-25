import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const ChooseUsElementStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
  box-shadow: 0px 0px 7px 1px ${theme.colors.stroke};
  transition: all .2s ease;
  cursor: pointer;

  &:hover {
    background-color: #F60020;
    color: #fff;
  }

  & h3 {
    text-align: center;
  }

  & figure {
    width: 80px;
    height: 80px;
    background-color: #000;
    border-radius: 50%;
    margin: 0 auto;
  }
`
const ChooseUsElement = ({ icon, title, text }) => {
  return (
    <ChooseUsElementStyled>
        <figure className="value-icon">
          <img src={icon} alt="" />
        </figure>
        <h3>{title}</h3>
        <p>{text}</p>
    </ChooseUsElementStyled>
  )
}

export default ChooseUsElement
