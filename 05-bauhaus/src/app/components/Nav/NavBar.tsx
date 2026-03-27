export default function NavBar({
  title = 'Bauhaus',
  subtitle = 'My 500',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <nav className="text-gray sticky top-0 max-w-4xl bg-white px-10 py-6 font-sans font-bold">
      {title} | <span className="font-medium uppercase">{subtitle}</span>
    </nav>
  )
}
