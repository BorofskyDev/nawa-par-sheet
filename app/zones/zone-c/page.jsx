import MainHeading from '@/components/headings/main-heading/MainHeading'
import ZonesAppComponent from '@/components/zones/Zones'
import { zoneCData } from '@/libs/data/zone-data/zoneCData'

export default function ZoneBPage() {
  return (
    <div className='grid-center'>
      <MainHeading>Zone C</MainHeading>
      <ZonesAppComponent className='blue-theme' zone={zoneCData} />
    </div>
  )
}
