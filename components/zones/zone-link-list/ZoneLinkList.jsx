import ZoneLink from '@/components/buttons/zone-link/ZoneLink'
import styles from './ZoneLinkList.module.scss'

export default function ZoneLinkList() {
    return (
        <ul className={styles.zoneLinkList}>
            <li>
                <ZoneLink href='/zones/zone-a'>Zone A</ZoneLink>
            </li>
            <li>
                <ZoneLink href='/zones/zone-b'>Zone B</ZoneLink>
            </li>
            <li>
                <ZoneLink href='/zones/zone-c'>Zone C</ZoneLink>
            </li>
        </ul>
    )
}