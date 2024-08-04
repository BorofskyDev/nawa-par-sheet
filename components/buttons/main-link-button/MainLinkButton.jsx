import Link from 'next/link'
import styles from './MainLinkButton.module.scss'

export default function MainLinkButton({ href, children }) {
  return <Link className={styles.mainLinkButton} href={href}>{children}</Link>
}
