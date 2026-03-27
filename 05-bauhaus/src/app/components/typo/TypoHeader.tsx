import { JSX } from 'react'

export default function TypoHeader({
  element = 'h1',
  level = 'headline',
  children,
  className = '',
}: {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  level?: 'headline' | 'headline-small' | 'subheadline'
  children: JSX.Element | string
  className?: string
}) {
  const Element = element

  const getClassName = () => {
    switch (level) {
      case 'headline':
        return 'text-neutral-950 text-7xl font-headers'
      case 'headline-small':
        return 'text-5xl text-orange font-headers'
      case 'subheadline':
        return 'text-neutral-950 text-4xl font-headers'
      default:
        return ''
    }
  }

  return (
    <Element className={`${getClassName()} ${className}`}>{children}</Element>
  )
}
