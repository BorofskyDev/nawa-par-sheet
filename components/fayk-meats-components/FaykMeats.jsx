import { dataHelper } from '@/libs/functions/dataHelper'
import { GiInfinity } from 'react-icons/gi'
import styles from './FaykMeats.module.scss'

export default function FaykMeats({ data }) {
  const processedData = dataHelper(data)

  return (
    <div className={styles.faykMeats}>
      <h1>Fayk Meats</h1>
      <ul>
        {processedData.map((item) => (
          <li key={item.id}>
            <h2>Brand: {item.brand}</h2>
            <p>Product Name: {item.name}</p>
            <p>
              Daily Par:
              {item.stockAsNeeded === true ? (
                <GiInfinity />
              ) : (
                <span>{item.dailyPar}</span>
              )}
            </p>

            <p>Shelf Life: {item.shelfLife} days</p>
            <p>Expiration Date: {item.expirationDate}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
