import { dataHelper } from '@/libs/functions/dataHelper'
import { GiInfinity } from 'react-icons/gi'

export default function LetsGetThisBread({ data }) {
  const processedData = dataHelper(data)

  return (
    <div>
      <h1>Let's Get This Bread</h1>
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

            <p>
              Shelf Life: {item.shelfLife} days
            </p>
            <p>Expiration Date: {item.expirationDate}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
