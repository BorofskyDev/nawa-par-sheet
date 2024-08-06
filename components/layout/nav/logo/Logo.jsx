import Link from 'next/link'
import styles from './Logo.module.scss'

export default function Logo(){
    return (
      <Link href='/' className={styles.logo}>
        <span>N</span>
        <span>A</span>
        <span>W</span>
        <span>A</span>
      </Link>
    )
}