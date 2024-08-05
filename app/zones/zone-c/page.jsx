import MainHeading from '@/components/headings/main-heading/MainHeading'
import ZonesAppComponent from '@/components/zones/Zones'
import { zoneCData } from '@/libs/data/zone-data/zoneCData'

export default function ZoneBPage() {
  console.log('Zone C Data:', zoneCData)
  return (
    <div>
      <MainHeading>Zone C</MainHeading>
      <ZonesAppComponent zone={zoneCData} />
    </div>
  )
}
