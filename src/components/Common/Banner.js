import React from 'react'
import styled from 'styled-components'

const BannerStyled = styled.div`
  background: linear-gradient(to right, #00000075 , #00000075), ${({ backgroundUrl }) => backgroundUrl && `url(${backgroundUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: ${({ height }) => height ? height : "85vh"};
  display: grid;
  align-items: center;
`

const Banner = ({ children, image, height }) => {
  return (
    <BannerStyled backgroundUrl={image} height={height}>
      {children}
    </BannerStyled>
  )
}

export default Banner
