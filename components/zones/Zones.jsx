'use client'
import useZoneTasks from '@/libs/hooks/useZoneTasks'
import MainHeading from '../headings/main-heading/MainHeading'
import TasksList from './task-list/TaskList'

export default function ZonesAppComponent({ zone, className }) {
  useZoneTasks()
  return (
    <div>
      <TasksList className={className} zone={zone} />
    </div>
  )
}
