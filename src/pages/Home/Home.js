import styled from 'styled-components'
import Banner from '../../sections/Banner'
import Promotion from '../../sections/Promotion'
import FeaturedProducts from '../../sections/FeaturedProducts'
import Publicity from '../../sections/Publicity'

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
      {/* Mas secciones ;) */}
    </HomeStyled>
  )
}

export default Home
