import MainHeading from '@/components/headings/main-heading/MainHeading'
import ZonesAppComponent from '@/components/zones/Zones'
import { zoneAData } from '@/libs/data/zone-data/zoneAData'

export default function ZoneAPage() {
  return (
    <div className='grid-center'>
      <MainHeading>Zone A</MainHeading>
      <ZonesAppComponent className='red-theme' zone={zoneAData} />
    </div>
  )
}
