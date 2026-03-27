import Img from 'next/image'
import ButtonMain from '../Actions/Buttons/ButtonMain'

export default function ContactPerson({
  name,
  role,
  email,
  tag,
  imageSrc = '',
  className = '',
}: {
  name: string
  role: string
  email: string
  tag: string
  imageSrc: string
  className?: string
}) {
  return (
    <div
      className={`align-center flex w-full max-w-[663px] items-center justify-between ${className}`}
    >
      <div className="flex">
        <Img
          src={imageSrc}
          alt="Contact Person"
          width={69}
          height={69}
          className="me-4 rounded-full"
        />
        <div>
          <p className="text-text-sm font-sans font-medium">Written by</p>
          <p className="text-text-sm text-orange font-bold">
            {name}, {role}
          </p>
          <p className="text-text-sm font-sans font-medium text-black">
            {tag} | {email}
          </p>
        </div>
      </div>
      <ButtonMain
        type="default-outline"
        element="button"
        className="h-[45px] px-0! py-0!"
      >
        Send Mail
      </ButtonMain>
    </div>
  )
}
