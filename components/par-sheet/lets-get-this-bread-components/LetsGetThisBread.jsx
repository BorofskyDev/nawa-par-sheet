import ParSheet from '../ParSheet'
import styles from './LetsGetThisBread.module.scss'

export default function LetsGetThisBread({ data }) {
  return (
    <ParSheet
      data={data}
      title="Let's Get This Bread, Queen!"
      className={styles.letsGetThisBread}
    />
  )
}
