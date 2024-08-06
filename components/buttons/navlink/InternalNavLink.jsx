import Link from 'next/link'
import styles from './InternalNavLink.module.scss'

export default function InternalNavLink({ children, href, onClick, className }) {
  return (
    <Link className={`${styles.internalNavLink} ${className}`} href={href} onClick={onClick} >
      {children}
    </Link>
  )
}
