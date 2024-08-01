import NavTab from './nav-tabs/NavTab'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavTab href='/' title='home' />
        </li>
        <li>
          <NavTab href='/lets-get-this-bread' title='Lets Get This Bread' />
        </li>
        <li>
          <NavTab href='/tortilla-town' title='Tortilla Town' />
        </li>
        <li>
          <NavTab href='/fayk-meats' title='Fayk Meats' />
        </li>
        <li>
          <NavTab href='/two-byte-muffins' title='2byte Muffins' />
        </li>
      </ul>
    </nav>
  )
}
