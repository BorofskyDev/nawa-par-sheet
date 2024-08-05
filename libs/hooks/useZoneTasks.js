import { useEffect } from 'react'
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
  resetTasksAtMidnight,
} from '../functions/localStorageUtil'
import { zoneAData } from '../data/zone-data/zoneAData'
import { zoneBData } from '../data/zone-data/zoneBData'
import { zoneCData } from '../data/zone-data/zoneCData'

const zoneDataMap = {
  zoneA: zoneAData,
  zoneB: zoneBData,
  zoneC: zoneCData,
}

export default function useZoneTasks(zone) {
  useEffect(() => {
    const defaultTasks = zoneDataMap[zone]
    const savedTasks = loadTasksFromLocalStorage()

    if (!savedTasks || !savedTasks[zone]) {
      saveTasksToLocalStorage({ ...savedTasks, [zone]: defaultTasks })
    }

    resetTasksAtMidnight(zoneDataMap)
  }, [zone])
}
