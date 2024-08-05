import Link from 'next/link'
import styles from './ZoneLink.module.scss'

export default function ZoneLink({ href, children, className }) {
  return (
    <Link className={`${styles.zoneLink} ${className}`} href={href}>
      {children}
    </Link>
  )
}
