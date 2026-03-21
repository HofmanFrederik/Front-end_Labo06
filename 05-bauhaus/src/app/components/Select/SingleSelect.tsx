'use client'

import { useId } from 'react'

type SingleSelectOption = {
  label: string
  value: string
}

export default function SingleSelect({
  name,
  options,
  defaultValue,
  onChange,
  ariaLabel = 'Single select options',
}: {
  name?: string
  options: SingleSelectOption[]
  defaultValue?: string
  onChange?: (value: string) => void
  ariaLabel?: string
}) {
  const id = useId()
  const groupName = name ?? `single-select-${id}`
  const selectedValue = defaultValue ?? options[0]?.value

  return (
    <fieldset className="flex flex-col gap-2" aria-label={ariaLabel}>
      {options.map(option => {
        const optionId = `${groupName}-${option.value}`

        return (
          <label
            key={option.value}
            htmlFor={optionId}
            className="hover:bg-light-gray flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 transition-colors duration-200"
          >
            <input
              id={optionId}
              type="radio"
              name={groupName}
              value={option.value}
              defaultChecked={option.value === selectedValue}
              onChange={() => onChange?.(option.value)}
              className="peer sr-only"
            />

            <span className="after:bg-orange flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-black bg-transparent after:h-3 after:w-3 after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 peer-checked:after:opacity-100" />

            <span className="text-text-md font-demi font-sans text-black">
              {option.label}
            </span>
          </label>
        )
      })}
    </fieldset>
  )
}
