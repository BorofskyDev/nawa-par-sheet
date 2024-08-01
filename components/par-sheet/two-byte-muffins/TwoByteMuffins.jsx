import styles from './TwoByteMuffins.module.scss'
import ParSheet from '../ParSheet'

export default function TwoByteMuffins({ data }) {
  return (
    <ParSheet
      data={data}
      title='Two Byte Muffins!'
      className={styles.twoByteMuffins}
    />
  )
}
