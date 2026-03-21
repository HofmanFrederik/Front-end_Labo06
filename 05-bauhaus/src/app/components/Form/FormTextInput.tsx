'use client'

import { HTMLInputTypeAttribute } from 'react'

export default function TextInput({
  label,
  id,
  name,
  state = 'default',
  type = 'text',
  color = 'default',
  placeholder,
  errorMessage,
}: {
  label: string
  id?: string
  name?: string
  state?: 'default' | 'invalid'
  type?: HTMLInputTypeAttribute
  color?: 'default' | 'white'
  placeholder?: string
  errorMessage?: string
}) {
  const inputId = id ?? name ?? label.toLowerCase().replace(/\s+/g, '-')
  const isInvalid = state === 'invalid'
  const backgroundClass = color === 'white' ? 'bg-white' : 'bg-light-gray'

  const inputClassName = `${backgroundClass} text-text-md h-[50px] w-full px-4 font-sans font-medium border focus:outline-none ${
    isInvalid
      ? 'border-l-4 border-l-red-600 border-t-light-gray border-r-light-gray border-b-light-gray'
      : 'border-light-gray'
  }`

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={inputId}
        className="font-sans text-sm font-medium text-neutral-950"
      >
        {label}
      </label>
      <input
        className={inputClassName}
        type={type}
        name={name ?? inputId}
        id={inputId}
        placeholder={placeholder}
        aria-invalid={isInvalid}
      />

      {isInvalid && errorMessage ? (
        <p className="text-xs text-red-600">{errorMessage}</p>
      ) : null}
    </div>
  )
}
