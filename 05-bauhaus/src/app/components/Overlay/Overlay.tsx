'use client'

import { ReactNode } from 'react'

export default function Overlay({
  backgroundColor = 'black',
  children,
  onClose,
}: {
  backgroundColor?: 'black' | 'red'
  children: ReactNode
  onClose?: () => void
}) {
  const getBackgroundClassName = () => {
    switch (backgroundColor) {
      case 'red':
        return 'bg-red text-white'
      case 'black':
      default:
        return 'bg-black text-white'
    }
  }

  return (
    <aside
      className={`absolute top-0 left-0 ms-23 flex h-screen w-full max-w-[456px] flex-col px-12 py-10 ${getBackgroundClassName()}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close overlay"
        className="ml-auto cursor-pointer"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 5L19 19" stroke="currentColor" strokeWidth="1.5" />
          <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <div className="mt-auto">{children}</div>
    </aside>
  )
}
