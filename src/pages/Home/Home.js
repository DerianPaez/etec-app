import React from 'react'
import styled from 'styled-components'
import HomeBanner from '../../sections/Home/HomeBanner'
import Promotion from '../../sections/Home/Promotion'
import FeaturedProducts from '../../sections/Home/FeaturedProducts'
import Publicity from '../../sections/Home/Publicity'
import NewProducts from '../../sections/Home/NewProducts'
import GalleryProducts from '../../sections/Home/GalleryProducts'

const HomeStyled = styled.div`
  /*  */
`
const Home = () => {
  return (
    <HomeStyled>
      <HomeBanner/>
      <Promotion/>
      <FeaturedProducts/>
      <Publicity/>
      <NewProducts/>
      <GalleryProducts/>
    </HomeStyled>
  )
}

export default Home
