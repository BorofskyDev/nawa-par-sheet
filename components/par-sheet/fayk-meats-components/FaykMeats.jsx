import ParSheet from '../ParSheet'
import styles from './FaykMeats.module.scss'

export default function FaykMeats({ data }) {
  return (
    <ParSheet data={data} title='Fayk Meats!' className={styles.faykMeats} />
  )
}
