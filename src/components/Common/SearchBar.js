import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const SearchBarStyled = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${theme.colors.stroke};
  input {
    width: 100%;
    padding: 8px 20px;
  }
`
const SearchBar = ({ className }) => {
  // const { searchProductByName } = useProduct()
  const [inputValue, setInputValue] = useState('')
  const handleSearch = (event) => {
    const query = event.target.value
    setInputValue(query)
    // searchProductByName(query)
  }
  return (
    <SearchBarStyled className={className}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={handleSearch}
      />
    </SearchBarStyled>
  )
}

export default SearchBar
