export const convertTo12HourFormat = (time24) => {
  if (typeof time24 === 'number') {
    time24 = `${time24}:00` 
  }

  let [hours, minutes] = time24.split(':').map(Number)
  let period = 'am'

  if (hours >= 12) {
    period = 'pm'
    if (hours > 12) hours -= 12
  } else if (hours === 0) {
    hours = 12
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  return `${hours}:${formattedMinutes} ${period}`
}
