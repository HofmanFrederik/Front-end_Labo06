'use client'

import { useMemo, useState } from 'react'

export default function Slider({
  label = 'Description – Slider',
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 62,
  lowLabel = 'Low Value',
  highLabel = 'High Value',
  value,
  onChange,
}: {
  label?: string
  min?: number
  max?: number
  step?: number
  defaultValue?: number
  lowLabel?: string
  highLabel?: string
  value?: number
  onChange?: (value: number) => void
}) {
  const [internalValue, setInternalValue] = useState(defaultValue)

  const currentValue = value ?? internalValue
  const normalizedMax = max <= min ? min + 1 : max
  const safeValue = Math.min(Math.max(currentValue, min), normalizedMax)

  const progressPercent = useMemo(() => {
    const range = normalizedMax - min
    return ((safeValue - min) / range) * 100
  }, [min, normalizedMax, safeValue])

  const handleChange = (nextValue: number) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }

    onChange?.(nextValue)
  }

  return (
    <div className="w-full max-w-[500px] space-y-3">
      <div className="hover:bg-light-gray rounded-full px-2 py-3 transition-colors duration-200">
        <input
          type="range"
          min={min}
          max={normalizedMax}
          step={step}
          value={safeValue}
          onChange={event => handleChange(Number(event.target.value))}
          className="[&::-moz-range-thumb]:bg-orange [&::-webkit-slider-thumb]:bg-orange h-1 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full"
          style={{
            background: `linear-gradient(to right, var(--color-orange) 0%, var(--color-orange) ${progressPercent}%, var(--color-black) ${progressPercent}%, var(--color-black) 100%)`,
          }}
          aria-label={label}
        />
      </div>

      <div className="text-text-md font-demi flex items-center justify-between font-sans text-black">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  )
}
