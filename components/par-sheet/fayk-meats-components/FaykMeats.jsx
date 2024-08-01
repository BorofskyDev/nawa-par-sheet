import MainHeading from '@/components/headings/main-heading/MainHeading'
import ParSheet from '../ParSheet'

export default function FaykMeats({ data }) {
  return (
    <div>
<MainHeading>Fayk Meats</MainHeading>
      <ParSheet data={data} className='fm-border fm-theme' />
    </div>
  )
}
