export const getCurrentDayTasks = (tasks) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const currentDay = daysOfWeek[new Date().getDay()]

  console.log(`Current day: ${currentDay}`)
  console.log(`All tasks:`, tasks)

  const filteredTasks = tasks.filter((task) =>
    task.taskDays.includes(currentDay)
  )

  console.log(`Filtered tasks for ${currentDay}:`, filteredTasks)
  return filteredTasks
}
