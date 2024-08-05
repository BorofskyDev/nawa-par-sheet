'use client'
import useZoneTasks from '@/libs/hooks/useZoneTasks'
import MainHeading from '../headings/main-heading/MainHeading'
import TasksList from './task-list/TaskList'

export default function ZonesAppComponent({ zone }) {
  useZoneTasks()

  return (
    <div>
      <MainHeading>Get In The Zone!</MainHeading>
      <TasksList zone={zone} />
    </div>
  )
}
