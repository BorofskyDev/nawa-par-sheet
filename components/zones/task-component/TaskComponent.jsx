import styles from './TaskComponent.module.scss'

export default function TaskComponent({ task, onToggleTaskState }) {
  const handleClick = () => {
    onToggleTaskState(task.id)
  }

  return (
    <div
      className={`${styles.taskComponent} ${
        task.state === 'working'
          ? styles.working
          : task.state === 'complete'
          ? styles.complete
          : ''
      }`}
      onClick={handleClick}
    >
      <h3 className={styles.taskComponent__taskName}>{task.name}</h3>
      <p className={styles.taskComponent__taskDesc}>{task.taskDesc}</p>
      <p className={styles.taskComponent__taskCompletedBy}>
        {task.completedBy}
      </p>
      <button className={styles.taskComponent__taskWorking}>
        {task.state === 'working'
          ? 'Currently Working'
          : task.state === 'complete'
          ? 'Completed'
          : 'Start Working'}
      </button>
    </div>
  )
}
