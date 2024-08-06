import MainHeading from '@/components/headings/main-heading/MainHeading'
import ZonesAppComponent from '@/components/zones/Zones'
import { zoneBData } from '@/libs/data/zone-data/zoneBData'

export default function ZoneBPage() {
  return (
    <div className='grid-center'>
      <MainHeading>Zone B</MainHeading>
      <ZonesAppComponent className='green-theme' zone={zoneBData} />
    </div>
  )
}
