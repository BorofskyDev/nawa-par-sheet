import ParSheetLinkButton from '@/components/buttons/par-sheet-link-button/ParSheetLinkButton'
import styles from './LinkContainer.module.scss'

export default function LinkContainer() {
  return (
    <div className={styles.linkContainer}>
      <ParSheetLinkButton href='lets-get-this-bread'>
        Let's Get This Bread, Queen!
      </ParSheetLinkButton>
      <ParSheetLinkButton href='tortilla-town'>
        Tortilla Town
      </ParSheetLinkButton>
      <ParSheetLinkButton href='fayk-meats'>Fayk Meats</ParSheetLinkButton>
      <ParSheetLinkButton href='two-byte-muffins'>
        2Byte Muffins
      </ParSheetLinkButton>
    </div>
  )
}
