import styled from 'styled-components'
import MenuCategory from '../../components/Common/MenuCategory'
import SearchBar from '../../components/Common/SearchBar'
import ProductList from '../../components/Lists/ProductList'

const MainStyled = styled.main`
  position: relative;
  padding: 20px 0;
  min-height: calc(100vh - 52px);
  .main-container {
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-template-areas:
      "search menu"
      "productList productList";
    justify-content: space-between;
    align-items: center;
    grid-gap: 30px;
    .menu {
      grid-area: menu;
    }
    .search {
      grid-area: search;
    }
    .productList {
      grid-area: productList;
    }
  }

  @media (min-width: 800px) {
    .main-container {
      grid-template-columns: min-content 1fr;
      grid-template-areas:
        "menu search"
        "menu productList";
      align-items: stretch;
    }
  }
`
const Main = () => {
  
  return (
    <MainStyled>
      <div className="wrapper">
        <div className="main-container">
          <MenuCategory className="menu"/>
          <SearchBar className="search"/>
          <ProductList className="productList"/>
        </div>
      </div>
    </MainStyled>
  )
}

export default Main
