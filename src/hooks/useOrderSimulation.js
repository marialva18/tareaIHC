import { useEffect, useState } from 'react'
import { orderSteps } from '../utils/orderHelpers'

export function useOrderSimulation(active) {
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    if (!active) {
      setStepIndex(0)
      return undefined
    }
    const timer = setInterval(() => {
      setStepIndex((value) => Math.min(value + 1, orderSteps.length - 1))
    }, 2600)
    return () => clearInterval(timer)
  }, [active])

  return { stepIndex, steps: orderSteps }
}
