import Link from 'next/link'
import styles from './ParSheetLinkButton.module.scss'

export default function ParSheetLinkButton({ href, children }) {
  return (
    <Link className={styles.parSheetLinkButton} href={href}>
      <span>{children}</span>
    </Link>
  )
}
