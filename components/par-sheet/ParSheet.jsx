import { dataHelper } from '@/libs/functions/dataHelper'
import { GiInfinity } from 'react-icons/gi'
import styles from './ParSheet.module.scss'

export default function ParSheet({ data, className }) {
  const processedData = dataHelper(data)

  return (
    <div className={`${className} ${styles.parSheet}`}>
      <ul className={styles.parSheet__cardList}>
        {processedData.map((item) => (
          <li className={styles.productCard} key={item.id}>
            <h2 className={styles.productCard__brand}>
              Brand: <span>{item.brand}</span>
            </h2>
            <p className={styles.productCard__name}>
              Product Name: <span>{item.name} </span>{' '}
            </p>
            <p className={styles.productCard__dailyPar}>
              Daily Par:
              {item.stockAsNeeded === true ? (
                <span>
                  <GiInfinity />{' '}
                </span>
              ) : (
                <span>{item.dailyPar}</span>
              )}
            </p>

            <p className={styles.productCard__shelfLife}>
              Shelf Life: <span>{item.shelfLife}</span>{' '}
              {item.brand === 'staceys'
                ? 'days from production date on box'
                : 'days'}
            </p>
            <p className={styles.productCard__expDate}>
              Expiration Date:<span> {item.expirationDate}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
