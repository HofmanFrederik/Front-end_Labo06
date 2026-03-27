'use client'

import { TextareaHTMLAttributes } from 'react'

type FormTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'children'
> & {
  label: string
  state?: 'default' | 'invalid'
  errorMessage?: string
}

export default function TextArea({
  label,
  id,
  name,
  state = 'default',
  placeholder,
  rows = 5,
  errorMessage,
  className = '',
  ...props
}: FormTextAreaProps) {
  const textAreaId = id ?? name ?? label.toLowerCase().replace(/\s+/g, '-')
  const isInvalid = state === 'invalid'

  const textAreaClassName = `bg-light-gray text-text-md w-full px-4 py-3 font-sans font-medium border resize-none ${className} ${
    isInvalid
      ? 'border-l-4 border-l-red-600 border-t-light-gray border-r-light-gray border-b-light-gray'
      : 'border-light-gray'
  }`

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={textAreaId}
        className="font-sans text-sm font-medium text-neutral-950"
      >
        {label}
      </label>

      <textarea
        className={textAreaClassName}
        id={textAreaId}
        name={name ?? textAreaId}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={isInvalid}
        {...props}
      />

      {isInvalid && errorMessage ? (
        <p className="text-xs text-red-600">{errorMessage}</p>
      ) : null}
    </div>
  )
}
