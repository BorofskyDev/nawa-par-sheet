const STORAGE_KEY = 'zoneTasks'

export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export const loadTasksFromLocalStorate = () => {
  const tasks = localStorage.getItem(STORAGE_KEY)
  return tasks ? JSON.parse(tasks) : null
}

export const clearLocalStorage = () => {
  localStorage.removeItem(STORAGE_KEY)
}

export const resetTasksAtMidnight = (defaultTasks) => {
  const now = new Date()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  const timeout = midnight.getTime() - now.getTime()

  setTimeout(() => {
    saveTasksToLocalStorage(defaultTasks)
    resetTasksAtMidnight(defaultTasks)
  }, timeout)
}
