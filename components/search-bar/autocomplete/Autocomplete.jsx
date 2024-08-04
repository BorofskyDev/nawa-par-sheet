import styles from './Autocomplete.module.scss'

export default function Autocomplete({ suggestions, onClick }) {
  return (
    <ul className={styles.autocomplete}>
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => onClick(suggestion)}>
          {suggestions}{' '}
        </li>
      ))}
    </ul>
  )
}
