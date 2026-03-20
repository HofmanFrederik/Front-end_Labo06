'use client'

import { useState } from 'react'
import { Pause, Play } from 'lucide-react'

export default function ButtonPlay({
  element = 'button',
  type = 'play',
  variant = 'outline',
  href,
}: {
  element?: 'Button' | 'button' | 'a'
  type?: 'play' | 'pause'
  variant?: 'outline' | 'solid'
  href?: string
}) {
  const Element = element === 'Button' ? 'button' : element
  const [currentType, setCurrentType] = useState<'play' | 'pause'>(type)

  const handleToggle = () => {
    setCurrentType(current => (current === 'play' ? 'pause' : 'play'))
  }

  const baseClassName =
    'inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange transition-colors duration-300 cursor-pointer'

  const getClassName = () => {
    if (variant === 'outline') {
      return `${baseClassName} text-orange hover:bg-orange hover:text-white`
    }

    return `${baseClassName} bg-light-gray text-black hover:bg-gray border-none`
  }

  const icon =
    currentType === 'play' ? (
      <Play size={18} aria-hidden="true" />
    ) : (
      <Pause size={18} aria-hidden="true" />
    )

  if (Element === 'a') {
    return (
      <a href={href ?? '#'} className={getClassName()} onClick={handleToggle}>
        {icon}
      </a>
    )
  }

  return (
    <button className={getClassName()} onClick={handleToggle} type="button">
      {icon}
    </button>
  )
}
