import styled from 'styled-components'
import Banner from '../../sections/Banner'
import Promotion from '../../sections/Promotion'
import FeaturedProducts from '../../sections/FeaturedProducts'
import Publicity from '../../sections/Publicity'
import NewProducts from '../../sections/NewProducts'
import GalleryProducts from '../../sections/GalleryProducts'

const HomeStyled = styled.div`
  /*  */
`
const Home = () => {
  return (
    <HomeStyled>
      <Banner/>
      <Promotion/>
      <FeaturedProducts/>
      <Publicity/>
      <NewProducts/>
      <GalleryProducts/>
    </HomeStyled>
  )
}

export default Home
