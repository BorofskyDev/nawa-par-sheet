'use client'
import { useEffect, useState } from 'react'
import styles from './TaskList.module.scss'
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from '@/libs/functions/localStorageUtil'
import { getCurrentDayTasks } from '@/libs/functions/getCurrentDayTasks'
import TaskComponent from '../task-component/TaskComponent'

export default function TasksList({ zone }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = loadTasksFromLocalStorage()
    if (savedTasks && savedTasks[zone]) {
      setTasks(getCurrentDayTasks(savedTasks[zone]))
    }
  }, [zone])

  const toggleWorking = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, workingTask: !task.workingTask } : task
    )
    setTasks(updatedTasks)
    saveTasksToLocalStorage({
      ...loadTasksFromLocalStorage(),
      [zone]: updatedTasks,
    })
  }

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, completedTask: !task.completedTask }
        : task
    )
    setTasks(updatedTasks)
    saveTasksToLocalStorage({
      ...loadTasksFromLocalStorage(),
      [zone]: updatedTasks,
    })
  }
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onToggleWorking={toggleWorking}
          onToggleComplete={toggleComplete}
        />
      ))}
    </div>
  )
}
