import { useState } from 'react'
import { faykMeatsData } from '../data/fayk-meats/faykMeats'
import { tortillaTownData } from '../data/tortilla-town/tortillaTownData'
import { letsGetThisBreadData } from '../data/lets-get-this-bread/letsGetThisBread'
import { twoByteMuffinsData } from '../data/two-byte-muffins/twoByteMuffins'

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
    console.log('Search Query:', query)
    if (!query) {
      setFilteredData([])
      return
    }

    const lowerCaseQuery = query.toLowerCase()
    const results = allData.filter((item) =>
      item.brand.toLowerCase().includes(lowerCaseQuery)
    )
    console.log('Search results', results)
    setFilteredData(results)
  }

  return {
    filteredData,
    handleSearch,
    allBrands,
  }
}
