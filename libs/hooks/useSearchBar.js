import { useState } from 'react'

export default function useSearchBar(allBrands) {
  const [query, setQuery] = useState('')
  const [filteredBrands, setFilteredBrands] = useState([])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    if (value.length > 0) {
      const suggestions = allBrands.filter((brand) =>
        brand.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredBrands(suggestions)
    } else {
      setFilteredBrands([])
    }
  }

  const handleAutocompleteClick = (brand) => {
    setQuery(brand)
    setFilteredBrands([])
  }

  return {
    query,
    filteredBrands,
    setQuery,
    handleInputChange,
    handleAutocompleteClick,
  }
}
