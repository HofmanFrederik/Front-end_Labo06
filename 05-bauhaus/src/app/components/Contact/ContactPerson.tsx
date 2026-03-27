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
      className={`flex w-full max-w-[663px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-4 ${className}`}
    >
      <div className="flex items-center">
        <Img
          src={imageSrc}
          alt={`Profile picture of ${name}`}
          width={69}
          height={69}
          className="me-4 h-[69px] w-[69px] shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-sans text-sm font-medium text-gray-500">
            Written by
          </p>
          <p className="text-orange text-base font-bold">
            {name}, {role}
          </p>
          <p className="font-sans text-sm font-medium break-all text-black sm:break-normal">
            {tag} | {email}
          </p>
        </div>
      </div>
      <ButtonMain
        type="default-outline"
        element="button"
        className="h-[45px] w-full shrink-0 px-6 py-0 sm:w-auto"
      >
        Send Mail
      </ButtonMain>
    </div>
  )
}
