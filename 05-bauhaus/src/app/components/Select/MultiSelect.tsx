'use client'

import { useId, useState } from 'react'

type MultiSelectOption = {
  label: string
  value: string
}

export default function MultiSelect({
  name,
  options,
  defaultValues = [],
  onChange,
  ariaLabel = 'Multi select options',
}: {
  name?: string
  options: MultiSelectOption[]
  defaultValues?: string[]
  onChange?: (values: string[]) => void
  ariaLabel?: string
}) {
  const id = useId()
  const groupName = name ?? `multi-select-${id}`
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValues)

  const handleToggle = (value: string) => {
    setSelectedValues(current => {
      const nextValues = current.includes(value)
        ? current.filter(selectedValue => selectedValue !== value)
        : [...current, value]

      onChange?.(nextValues)
      return nextValues
    })
  }

  return (
    <fieldset className="flex flex-col gap-2" aria-label={ariaLabel}>
      {options.map(option => {
        const optionId = `${groupName}-${option.value}`
        const isChecked = selectedValues.includes(option.value)

        return (
          <label
            key={option.value}
            htmlFor={optionId}
            className="hover:bg-light-gray flex cursor-pointer items-center gap-3 px-4 py-2 transition-colors duration-200"
          >
            <input
              id={optionId}
              type="checkbox"
              name={groupName}
              value={option.value}
              checked={isChecked}
              onChange={() => handleToggle(option.value)}
              className="peer sr-only"
            />

            <span className="after:bg-orange flex h-6 w-6 items-center justify-center border-[3px] border-black bg-transparent after:h-3 after:w-3 after:opacity-0 after:transition-opacity after:duration-200 peer-checked:after:opacity-100" />

            <span className="text-text-md font-demi font-sans text-black">
              {option.label}
            </span>
          </label>
        )
      })}
    </fieldset>
  )
}
