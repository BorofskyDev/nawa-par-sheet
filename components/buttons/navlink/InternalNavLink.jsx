import Link from 'next/link'
import styles from './InternalNavLink.module.scss'

export default function InternalNavLink({ children, href, onClick }) {
  return (
    <Link className={styles.internalNavLink} href={href} onClick={onClick} >
      {children}
    </Link>
  )
}
