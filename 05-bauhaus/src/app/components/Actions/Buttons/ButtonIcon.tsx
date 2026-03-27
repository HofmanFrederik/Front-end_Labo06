import { ReactNode } from 'react'

export default function ButtonIcon({
  element = 'button',
  type = 'outline',
  href,
  icon,
  className = '',
}: {
  element?: 'Button' | 'button' | 'a'
  type?: 'outline' | 'solid'
  href?: string
  icon: ReactNode
  className?: string
}) {
  const Element = element === 'Button' ? 'button' : element

  const getClassName = () => {
    const baseClassName =
      'inline-flex h-12 w-12 items-center justify-center border-2 transition-colors duration-300 cursor-pointer'

    switch (type) {
      case 'outline':
        return `${baseClassName} border-orange text-orange hover:bg-orange hover:text-white`
      case 'solid':
        return `${baseClassName} bg-light-gray text-black border-none hover:bg-gray hover:text-black`
      default:
        return ''
    }
  }

  if (Element === 'a') {
    return (
      <a href={href ?? '#'} className={getClassName() + ' ' + className}>
        <span aria-hidden="true">{icon}</span>
      </a>
    )
  }

  return <button className={getClassName() + ' ' + className}>{icon}</button>
}
