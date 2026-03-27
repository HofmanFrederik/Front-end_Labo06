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
    <div className="w-full max-w-[321px]">
      <TypoHeader
        element="h2"
        level="subheadline"
        className={`w-full text-black ${className}`}
      >
        {title}
      </TypoHeader>
      {children}
      <ButtonMain element="button" type="default-outline" className="mt-6">
        {buttonText || 'Get in touch'}
      </ButtonMain>
    </div>
  )
}
