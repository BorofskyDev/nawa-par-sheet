import styles from './MainTitle.module.scss'

export default function MainTitle({ children }) {
  return (
    <div className={styles.mainTitle}>
      <h1>
        <span>N</span>
        <span>A</span>
        <span>W</span>
        <span>A</span>
      </h1>
      <p>Not Another Work App</p>
    </div>
  )
}
