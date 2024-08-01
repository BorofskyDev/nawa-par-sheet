import Link from 'next/link'
import styles from './ParSheetLinkButton.module.scss'

export default function ParSheetLinkButton({ href, children, className }) {
  return (
    <Link className={`${styles.parSheetLinkButton} ${className}`} href={href}>
      <span>{children}</span>
    </Link>
  )
}
