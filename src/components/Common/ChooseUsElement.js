import React from 'react'
import styled from 'styled-components'

const ChooseUsElementStyled = styled.div`
  text-align: center;
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
