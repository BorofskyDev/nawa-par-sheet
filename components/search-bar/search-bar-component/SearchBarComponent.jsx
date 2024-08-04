import useSearchBar from '@/libs/hooks/useSearchBar'
import Autocomplete from '../autocomplete/Autocomplete'
import styles from './SearchBarComponent.module.scss'

export default function SearchBarComponent({ onSearch, allBrands }) {
  const { query, filteredBrands, handleInputChange, handleAutocompleteClick } =
    useSearchBar(allBrands)

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <div className={styles.searchBarComponent}>
      <label htmlFor='brandSearch'>Enter brand name here: </label>
      <input
        type='text'
        id='brandSearch'
        value={query}
        onChange={handleInputChange}
        placeholder='Enter brand name here'
      />
      <button onClick={handleSearch}>Search</button>
      {filteredBrands.length > 0 && (
        <Autocomplete
          suggestions={filteredBrands}
          onClick={handleAutocompleteClick}
        />
      )}
    </div>
  )
}
