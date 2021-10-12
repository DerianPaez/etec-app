import { useState } from 'react'
import styled from 'styled-components'

const SearchBarStyled = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--gray-light-color);
  input {
    width: 100%;
    border: none;
    background: none;
    outline: none;
    padding: 5px 15px;
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
