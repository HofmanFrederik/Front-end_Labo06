import ButtonMain from '../Actions/Buttons/ButtonMain'
import TypoHeader from '../typo/TypoHeader'

export default function ContactInfo({
  className = '',
  children,
  buttonText = '',
  title = '',
}: {
  className?: string
  children: React.ReactNode
  buttonText?: string
  title?: string
}) {
  return (
    <div className="w-full sm:max-w-[321px]">
      <TypoHeader
        element="h2"
        level="subheadline"
        className={`mb-4 w-full text-black ${className}`}
      >
        {title}
      </TypoHeader>

      <div className="text-gray-700">{children}</div>

      <ButtonMain
        element="button"
        type="default-outline"
        className="mt-8 w-full sm:w-auto"
      >
        {buttonText || 'Get in touch'}
      </ButtonMain>
    </div>
  )
}
