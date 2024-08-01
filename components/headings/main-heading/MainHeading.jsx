import styles from './MainHeading.module.scss'

export default function MainHeading({children}) {
    return (
        <h1 className={styles.mainHeading}>
        {children}
        </h1>
    )
    }