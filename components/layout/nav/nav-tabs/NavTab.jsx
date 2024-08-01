import Link from 'next/link'
import styles from './NavTab.module.scss'

export default function NavTab({ href, title}) {
    return (
        <Link className={styles.navTab} href={href}>{title}</Link>
    )
}