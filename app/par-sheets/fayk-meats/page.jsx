import { faykMeatsData } from '@/libs/data/par-sheet-data/fayk-meats/faykMeats'
import FaykMeats from '@/components/par-sheet/fayk-meats-components/FaykMeats'

export default function FaykMeatsPage() {
  return <FaykMeats data={faykMeatsData} />
}
