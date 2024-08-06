'use client'
import useTasks from '@/libs/hooks/useTasks'
import styles from './TaskList.module.scss'
import TaskComponent from '../task-component/TaskComponent'

export default function TasksList({ zone, className }) {
  const { tasks, toggleTaskState } = useTasks(zone)

  return (
    <div className={`${styles.taskList} ${className}`}>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onToggleTaskState={toggleTaskState}
        />
      ))}
    </div>
  )
}
