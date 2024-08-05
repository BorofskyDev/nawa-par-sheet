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

    const sortTasks = (tasks) => {
      return tasks.sort((a, b) => {
        const timeA =
          typeof a.completeTaskBy === 'number'
            ? a.completeTaskBy
            : parseInt(a.completeTaskBy.split(':')[0])
        const timeB =
          typeof b.completeTaskBy === 'number'
            ? b.completeTaskBy
            : parseInt(b.completeTaskBy.split(':')[0])
        return timeA - timeB
      })
    }

    if (savedTasks && savedTasks[zone]) {
      const currentDayTasks = getCurrentDayTasks(savedTasks[zone])
      setTasks(sortTasks(currentDayTasks))
    } else {
      setTasks(sortTasks(getCurrentDayTasks(zone)))
    }
  }, [zone])

  const toggleTaskState = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        if (task.state === 'default') {
          return { ...task, state: 'working' }
        } else if (task.state === 'working') {
          return { ...task, state: 'complete' }
        } else {
          return { ...task, state: 'default' }
        }
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
