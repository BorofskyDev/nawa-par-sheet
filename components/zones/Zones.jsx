'use client'
import useZoneTasks from '@/libs/hooks/useZoneTasks'
import MainHeading from '../headings/main-heading/MainHeading'
import TasksList from './task-list/TaskList'

export default function ZonesAppComponent({ zone }) {
    console.log('Zone Data in ZonesAppComponent:', zone)
  useZoneTasks()
  return (
    <div>
      
      <TasksList zone={zone} />
    </div>
  )
}
