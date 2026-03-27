import { X } from 'lucide-react'
import { JSX } from 'react'

export default function Overlay({
  children,
  onClose,
  style = 'light',
  className,
}: {
  children: JSX.Element | JSX.Element[]
  onClose: () => void
  style: 'dark' | 'light'
  className?: string
}) {
  const getStyle = style === 'dark' ? 'bg-gray-900' : 'bg-orange'

  return (
    <div
      className={`fixed inset-0 z-10 flex max-w-114 px-6 pt-6 pb-24 text-white ${className} ${getStyle}`}
    >
      <button onClick={onClose} className="absolute top-12 right-12">
        <X className="size-8" />
      </button>

      <div className="mt-auto space-y-6">{children}</div>
    </div>
  )
}
