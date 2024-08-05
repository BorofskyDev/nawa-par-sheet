import { useEffect, useState } from 'react'
import { getCurrentDayTasks } from '@/libs/functions/getCurrentDayTasks'
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from '@/libs/functions/localStorageUtil'

const useTasks = (zone) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = loadTasksFromLocalStorage()

    if (savedTasks && savedTasks[zone]) {
      const currentDayTasks = getCurrentDayTasks(savedTasks[zone])
      setTasks(currentDayTasks)
    } else {
      setTasks(getCurrentDayTasks(zone))
    }
  }, [zone])

  const toggleTaskState = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const newState =
          task.state === 'default'
            ? 'working'
            : task.state === 'working'
            ? 'complete'
            : 'default'
        return { ...task, state: newState }
      }
      return task
    })
    setTasks(updatedTasks)
    saveTasksToLocalStorage({
      ...loadTasksFromLocalStorage(),
      [zone]: updatedTasks,
    })
  }

  return { tasks, toggleTaskState }
}

export default useTasks
