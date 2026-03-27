import { ReactNode } from 'react'

export default function ButtonMain({
  element = 'button',
  type = 'default-outline',
  href,
  icon,
  children,
  className = '',
}: {
  element?: 'Button' | 'button' | 'a'
  type?: 'default-outline' | 'icon-outline' | 'default-solid' | 'icon-solid'
  href?: string
  icon?: ReactNode
  children: ReactNode
  className?: string
}) {
  const Element = element === 'Button' ? 'button' : element

  const getClassName = () => {
    switch (type) {
      case 'default-outline':
        return 'py-4 px-4 border-2 border-orange text-orange font-demi text-text-md font-sans min-w-[138px] hover:bg-orange hover:text-white transition-colors duration-300 cursor-pointer'
      case 'default-solid':
        return 'py-4 px-4 bg-light-gray text-black font-demi text-text-md font-sans min-w-[138px] hover:bg-gray transition-colors duration-300 cursor-pointer'
      case 'icon-outline':
        return 'py-4 px-4 border-2 border-orange text-orange font-demi text-text-md font-sans min-w-[138px] hover:bg-orange hover:text-white transition-colors duration-300 cursor-pointer inline-flex items-center gap-2'
      case 'icon-solid':
        return 'py-4 px-4 bg-light-gray text-black font-demi text-text-md font-sans min-w-[138px] hover:bg-gray transition-colors duration-300 cursor-pointer inline-flex items-center gap-2'
      default:
        return ''
    }
  }

  const content = (
    <>
      <span>{children}</span>
      {type === 'icon-outline' || type === 'icon-solid' ? (
        <span aria-hidden="true">{icon}</span>
      ) : null}
    </>
  )

  if (Element === 'a') {
    return (
      <a href={href ?? '#'} className={getClassName() + ' ' + className}>
        {content}
      </a>
    )
  }

  return <button className={getClassName() + ' ' + className}>{content}</button>
}
