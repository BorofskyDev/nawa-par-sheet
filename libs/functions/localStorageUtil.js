export const loadTasksFromLocalStorage = () => {
  try {
    const tasks = localStorage.getItem('tasks')
    return tasks ? JSON.parse(tasks) : null
  } catch (error) {
    console.error('Error loading tasks from local storage:', error)
    return null
  }
}

export const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  } catch (error) {
    console.error('Error saving tasks to local storage:', error)
  }
}

export const resetTasksAtMidnight = (defaultTasks) => {
  const now = new Date()
  const millisTillMidnight =
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) -
    now

  setTimeout(() => {
    saveTasksToLocalStorage(defaultTasks)
    resetTasksAtMidnight(defaultTasks)
  }, millisTillMidnight)
}
