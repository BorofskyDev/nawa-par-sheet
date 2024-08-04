import ParSheetLinkButton from '@/components/buttons/par-sheet-link-button/ParSheetLinkButton'
import styles from './LinkContainer.module.scss'
import ThemeToggle from '../theme-toggle/ThemeToggle'

export default function LinkContainer() {
  return (
    <div className={styles.linkContainer}>
      <ParSheetLinkButton className='lgtbq-theme' href='/par-sheets/lets-get-this-bread'>
        Let's Get This Bread, Queen!
      </ParSheetLinkButton>
      <ParSheetLinkButton className='tt-theme'  href='/par-sheets/tortilla-town'>
        Tortilla Town
      </ParSheetLinkButton>
      <ParSheetLinkButton className='fm-theme' href='/par-sheets/fayk-meats'>Fayk Meats</ParSheetLinkButton>
      <ParSheetLinkButton className='tbm-theme' href='/par-sheets/two-byte-muffins'>
        2Byte Muffins
      </ParSheetLinkButton>
      <ThemeToggle />
    </div>
  )
}
