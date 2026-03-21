'use client'

import { useState } from 'react'

export default function StepByStep({
  label = 'Description – Step by Step',
  steps = ['Step 1', 'Step 2', 'Step 3'],
  defaultStep = 2,
  currentStep,
  onStepChange,
}: {
  label?: string
  steps?: string[]
  defaultStep?: number
  currentStep?: number
  onStepChange?: (step: number) => void
}) {
  const normalizedSteps =
    steps.length > 0 ? steps : ['Step 1', 'Step 2', 'Step 3']
  const maxStep = normalizedSteps.length

  const safeDefaultStep = Math.min(Math.max(defaultStep, 1), maxStep)
  const [internalStep, setInternalStep] = useState(safeDefaultStep)

  const activeStep = currentStep
    ? Math.min(Math.max(currentStep, 1), maxStep)
    : internalStep

  const progressPercent =
    maxStep > 1 ? ((activeStep - 1) / (maxStep - 1)) * 100 : 0

  const handleStepChange = (step: number) => {
    if (currentStep === undefined) {
      setInternalStep(step)
    }

    onStepChange?.(step)
  }

  return (
    <div className="w-full max-w-[640px] space-y-4">
      <p className="text-text-lg font-demi font-sans text-black">{label}</p>

      <div className="bg-light-gray rounded-full px-5 py-4">
        <div className="relative">
          <div className="h-1 w-full rounded-full bg-black" />
          <div
            className="bg-orange absolute top-0 left-0 h-1 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />

          <div className="pointer-events-none absolute top-1/2 right-0 left-0 -translate-y-1/2">
            <div className="flex items-center justify-between">
              {normalizedSteps.map((stepLabel, index) => {
                const stepNumber = index + 1
                const isReached = stepNumber <= activeStep

                return (
                  <button
                    key={stepLabel}
                    type="button"
                    onClick={() => handleStepChange(stepNumber)}
                    className="bg-light-gray pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full"
                    aria-label={stepLabel}
                    aria-current={
                      stepNumber === activeStep ? 'step' : undefined
                    }
                  >
                    <span
                      className={`h-5 w-5 rounded-full ${isReached ? 'bg-orange' : 'bg-black'}`}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="text-text-lg font-demi flex items-center justify-between font-sans text-black">
        {normalizedSteps.map(stepLabel => (
          <span key={stepLabel}>{stepLabel}</span>
        ))}
      </div>
    </div>
  )
}
