import { useState } from 'react'
import { faykMeatsData } from '../data/par-sheet-data/fayk-meats/faykMeats'
import { tortillaTownData } from '../data/par-sheet-data/tortilla-town/tortillaTownData'
import { letsGetThisBreadData } from '../data/par-sheet-data/lets-get-this-bread/letsGetThisBread'
import { twoByteMuffinsData } from '../data/par-sheet-data/two-byte-muffins/twoByteMuffins'

const allData = [
  ...faykMeatsData,
  ...tortillaTownData,
  ...letsGetThisBreadData,
  ...twoByteMuffinsData,
]

const allBrands = [...new Set(allData.map((item) => item.brand))]

export default function useSearchData() {
  const [filteredData, setFilteredData] = useState([])

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData([])
      return
    }

    const lowerCaseQuery = query.toLowerCase()
    const results = allData.filter((item) =>
      item.brand.toLowerCase().includes(lowerCaseQuery)
    )
    setFilteredData(results)
  }

  return {
    filteredData,
    handleSearch,
    allBrands,
  }
}
