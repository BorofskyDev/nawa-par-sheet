import styles from './TwoByteMuffins.module.scss'
import ParSheet from '../ParSheet'
import MainHeading from '@/components/headings/main-heading/MainHeading'

export default function TwoByteMuffins({ data }) {
  return (
    <div>
      <MainHeading>Two Byte Muffins</MainHeading>
      <ParSheet
        data={data}
        className='tbm-border tbm-theme'
      />
      
    </div>
  )
}
