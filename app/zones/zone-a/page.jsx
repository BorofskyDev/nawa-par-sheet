import MainHeading from '@/components/headings/main-heading/MainHeading'
import ZonesAppComponent from '@/components/zones/Zones'
import { zoneAData } from '@/libs/data/zone-data/zoneAData'

export default function ZoneAPage() {
  console.log('Zone A Data:', zoneAData)
  return (
    <div>
      <MainHeading>Zone A</MainHeading>
      <ZonesAppComponent zone={zoneAData} />
    </div>
  )
}
