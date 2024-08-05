import styles from './TaskComponent.module.scss'

export default function TaskComponent({ task, onToggleWorking, onToggleComplete}){
    const handleWorkingClick = () => {
        onToggleWorking(task.id)
    }

    const handleCompleteClick = () => {
        onToggleComplete(task.id)
    }

    return (
      <div className={styles.taskComponent}>
        <h3 className={styles.taskComponent__taskName}>{task.name}</h3>
        <p className={styles.taskComponent__taskDesc}>{task.taskDesc}</p>
        <p className={styles.taskComponent__taskCompletedBy}>{task.completedBy}</p>
        <button className={styles.taskComponent__taskWorking} onClick={handleWorkingClick}>
            {task.workingTask ? 'Currently Working' : 'Start Working'}
        </button>
        <button onClick={handleCompleteClick} className={styles.taskComponent__taskCompleted}>
            {task.completedTask ? 'Completed' : 'Complete Task'}
        </button>
      </div>
    )
}