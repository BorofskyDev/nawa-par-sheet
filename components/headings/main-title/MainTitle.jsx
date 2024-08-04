import styles from './MainTitle.module.scss'

export default function MainTitle({ children }) {
  return (
    <div>
      <h1 className={styles.mainTitle}>
        <span>N</span>
        <span>A</span>
        <span>W</span>
        <span>A</span>
      </h1>
      <p>
        <span>N</span>ot <span>A</span>nother <span>W</span>ork <span>A</span>pp
      </p>
    </div>
  )
}
