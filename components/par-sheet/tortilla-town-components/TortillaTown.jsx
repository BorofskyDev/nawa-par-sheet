import ParSheet from '../ParSheet'
import styles from './TortillaTown.module.scss'

export default function TortillaTown({ data }) {
  return (
    <ParSheet
      data={data}
      title='Tortilla Town!'
      className={styles.tortillaTown}
    />
  )
}
