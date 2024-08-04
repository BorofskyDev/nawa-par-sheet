'use client'
import SearchBarComponent from './search-bar-component/SearchBarComponent'
import ParSheet from '../par-sheet/ParSheet'
import useSearchData from '@/libs/hooks/useSearchData'

export default function SearchBar() {
  const { filteredData, handleSearch, allBrands } = useSearchData()
  return (
    <div>
      <SearchBarComponent onSearch={handleSearch} allBrands={allBrands} />
      {filteredData.length > 0 && (
        <ParSheet
          className='default-theme default-border'
          data={filteredData}
        />
      )}
    </div>
  )
}
