import MainHeading from '@/components/headings/main-heading/MainHeading'
import ParSheet from '../ParSheet'
import styles from './LetsGetThisBread.module.scss'

export default function LetsGetThisBread({ data }) {
  return (
    <>
      <MainHeading>Let's Get This Bread, Queen!</MainHeading>
      <ParSheet data={data} className={styles.letsGetThisBread} />
    </>
  )
}
