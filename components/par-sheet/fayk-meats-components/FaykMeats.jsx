import ParSheet from '../ParSheet'
import styles from './FaykMeats.module.scss'

export default function FaykMeats({ data }) {
  return (
    <ParSheet data={data} className={styles.faykMeats} />
  )
}
