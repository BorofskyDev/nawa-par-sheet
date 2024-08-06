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
      return tasks.sort((a, b) => a.completeTaskBy - b.completeTaskBy)
    }

    console.log('Saved tasks:', savedTasks)

    if (savedTasks && savedTasks[zone]) {
      console.log('Tasks for zone:', savedTasks[zone])
      const currentDayTasks = getCurrentDayTasks(savedTasks[zone])
      setTasks(sortTasks(currentDayTasks))
    } else {
      console.log('Using default zone tasks:', zone)
      const zoneData = getCurrentDayTasks(zone)
      setTasks(sortTasks(zoneData))
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
