import MainHeading from '@/components/headings/main-heading/MainHeading'
import ParSheet from '../ParSheet'
import styles from './TortillaTown.module.scss'

export default function TortillaTown({ data }) {
  return (
    <>
    <MainHeading>Tortilla Town</MainHeading>
    <ParSheet
      data={data}
      className='tt-border tt-theme'
    />
    
    </>
  )
}
