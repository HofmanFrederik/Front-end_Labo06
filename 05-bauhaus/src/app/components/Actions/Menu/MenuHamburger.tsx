'use client'

interface MenuHamburgerProps {
  isOpen: boolean
  toggle: () => void
}

export default function MenuHamburger({ isOpen, toggle }: MenuHamburgerProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-pressed={isOpen}
      onClick={toggle} // Gebruikt de functie van de parent
      className="inline-flex items-center justify-center"
    >
      <span className="relative h-[60px] w-[60px] cursor-pointer">
        {/* Hamburger lijntjes */}
        <span
          className={`absolute top-1/2 left-1/2 flex h-[40px] w-[60px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between transition-all duration-300 ease-in-out ${
            isOpen ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <span className="bg-orange h-2 w-full rounded-full" />
          <span className="h-2 w-full rounded-full bg-gray-500" />
          <span className="h-2 w-full rounded-full bg-gray-500" />
        </span>

        {/* Kruisje (X) */}
        <span
          className={`absolute inset-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <span className="absolute top-1/2 left-1/2 h-2 w-[60px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-gray-500" />
          <span className="absolute top-1/2 left-1/2 h-2 w-[60px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-gray-500" />
        </span>
      </span>
    </button>
  )
}
