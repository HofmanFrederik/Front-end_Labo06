'use client'

import { useState } from 'react'

export default function MenuHamburger({
  defaultOpen = false,
}: {
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <button
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-pressed={isOpen}
      onClick={() => setIsOpen(current => !current)}
      className="inline-flex items-center justify-center"
    >
      <span className="relative h-[60px] w-[60px] cursor-pointer">
        <span
          className={`absolute top-1/2 left-1/2 flex h-[40px] w-[60px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between transition-all duration-300 ease-in-out ${
            isOpen ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <span className="bg-orange h-2 w-full rounded-full" />
          <span className="bg-gray h-2 w-full rounded-full" />
          <span className="bg-gray h-2 w-full rounded-full" />
        </span>

        <span
          className={`absolute inset-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <span className="bg-gray absolute top-1/2 left-1/2 h-2 w-[60px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full" />
          <span className="bg-gray absolute top-1/2 left-1/2 h-2 w-[60px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full" />
        </span>
      </span>
    </button>
  )
}
