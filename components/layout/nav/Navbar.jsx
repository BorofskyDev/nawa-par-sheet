import NavTab from './nav-tabs/NavTab'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavTab href='/par-sheets/' title='home' />
        </li>
        <li>
          <NavTab href='/par-sheets/lets-get-this-bread' title='Lets Get This Bread' />
        </li>
        <li>
          <NavTab href='/par-sheets/tortilla-town' title='Tortilla Town' />
        </li>
        <li>
          <NavTab href='/par-sheets/fayk-meats' title='Fayk Meats' />
        </li>
        <li>
          <NavTab href='/par-sheets/two-byte-muffins' title='2byte Muffins' />
        </li>
      </ul>
    </nav>
  )
}
