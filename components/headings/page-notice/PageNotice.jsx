import styles from './PageNotice.module.scss'

export default function PageNotice({children}) {
    return (
        <div className={styles.pageNotice}>{children}</div>
    )
}