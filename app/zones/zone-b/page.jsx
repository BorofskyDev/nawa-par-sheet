import MainHeading from '@/components/headings/main-heading/MainHeading'
import ZonesAppComponent from '@/components/zones/Zones'
import { zoneBData } from '@/libs/data/zone-data/zoneBData'

export default function ZoneBPage() {
  console.log('Zone B Data:', zoneBData)
  return (
    <div>
      <MainHeading>Zone B</MainHeading>
      <ZonesAppComponent zone={zoneBData} />
    </div>
  )
}
