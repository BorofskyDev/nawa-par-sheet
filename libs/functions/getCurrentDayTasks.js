export const getCurrentDayTasks = (tasks) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = days[new Date().getDay()]

  return tasks.filter((task) => task.taskDays.includes(today))
}
