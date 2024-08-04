import { useEffect } from 'react'
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from '../functions/localStorageUtil'
import { zoneAData } from '../data/zone-data/zoneAData'
import { zoneBData } from '../data/zone-data/zoneBData'
import { zoneCData } from '../data/zone-data/zoneCData'

export default function useZoneTasks() {
  useEffect(() => {
    const defaultTasks = {
      zoneA: zoneAData,
      zoneB: zoneBData,
      zoneC: zoneCData,
    }

    const savedTasks = loadTasksFromLocalStorage()
    if (!savedTasks) {
      saveTasksToLocalStorage(defaultTasks)
    }

    resetTasksAtMidnight(defaultTasks, savedTasks)
  }, [])
}
