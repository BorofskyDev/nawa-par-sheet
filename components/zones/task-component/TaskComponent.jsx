import { convertTo12HourFormat } from '@/libs/functions/timeUtil'
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
      <h3 className={styles.taskComponent__taskName}>{task.taskName}</h3>
      <p className={styles.taskComponent__taskDesc}>{task.taskDesc}</p>
      <p className={styles.taskComponent__completeTaskBy}>
        Complete by: {convertTo12HourFormat(task.completeTaskBy)}
      </p>
      <button
        className={`${styles.taskComponent__taskWorking} ${
          task.state === 'working'
            ? styles.working
            : task.state === 'complete'
            ? styles.complete
            : ''
        }`}
      >
        {task.state === 'working'
          ? 'Currently Working'
          : task.state === 'complete'
          ? 'Completed'
          : 'Start Working'}
      </button>
    </div>
  )
}
