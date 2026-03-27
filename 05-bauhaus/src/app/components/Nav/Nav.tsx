'use client'

import Image from 'next/image'
import { useState } from 'react'
import Logo from '../Generic/Logo'
import MenuHamburger from '../Actions/Menu/MenuHamburger'
import TypoHeader from '../typo/TypoHeader'
import { Contact } from 'lucide-react'
import ContactPerson from '../Contact/ContactPerson'
import ContactInfo from '../Contact/ContactInfo'
import { title } from 'process'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className="fixed top-0 right-0 bottom-0 w-full max-w-2xs">
      <Logo
        className={`ttransition-[left,right] fixed top-24 z-20 mr-[66px] w-[238px] duration-500 ease-in-out ${
          isOpen ? 'left-10' : 'right-0'
        }`}
      />

      <div
        className={`sideblock fixed top-0 right-0 z-10 flex h-screen w-1/5 flex-col items-center bg-gray-200 ${
          isOpen ? 'left-0 w-[25%]' : 'right-0'
        }`}
      >
        <div className="mt-auto mb-[66px]">
          <MenuHamburger isOpen={isOpen} toggle={toggleMenu} />
        </div>
      </div>

      <div
        className={`MenuSection fixed inset-y-0 right-0 z-10 overflow-y-auto bg-gray-200 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: 'calc(100vw - 25%)' }}
      >
        <nav className="text-gray flex w-full justify-between bg-white px-10 py-6 font-sans font-medium">
          <p>
            <span className="font-bold">About</span> | Contact | Imprint
          </p>
          <p>Twitter | Instagram | Behance</p>
        </nav>
        <div className="relative min-h-screen w-full pb-20">
          <div className="absolute top-[118px] left-[170px] z-10">
            <Image
              src="/image1.png"
              alt="Man in cafe"
              width={409}
              height={277}
              className="contrast-125 grayscale"
            />
          </div>
          <div className="absolute top-[120px] left-[610px] z-20">
            <TypoHeader element="h2" level="headline" className="text-orange">
              The <br /> my500 <br /> team
            </TypoHeader>
          </div>
          <div className="absolute top-[340px] left-[480px] z-30">
            <Image
              src="/toren.png"
              alt="Berlin Tower"
              width={270}
              height={380}
              className="grayscale"
            />
          </div>

          <div className="absolute top-[415px] left-[80px] z-40 max-w-[380px]">
            <TypoHeader className="text-right" level="subheadline" element="h3">
              Isn&apos;t it easy to summarize thoughts in 500 words?
            </TypoHeader>
          </div>

          <div className="ps-[77px] pt-[680px]">
            <p className="font-demi font-sans">The Name – MY500</p>
            <p className="text-small mt-4 max-w-[660px] font-sans font-medium">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed dia. Hui ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed dia.Text Default Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed dia.
            </p>
            <div className="streep mt-6 h-[8px] w-[324px] rounded-lg bg-black"></div>
            <ContactPerson
              name="Mr. Robinson"
              role="Senior Editor"
              email="hello@my500.com"
              tag="@mrrob"
              imageSrc="/person1.png"
              className="mt-8"
            />
            <ContactPerson
              name="Mrs. Jones"
              role="Senior Editor"
              email="hello@my500.com"
              tag="@mrses"
              imageSrc="/person2.png"
              className="mt-8"
            />
            <div className="mt-24 flex">
              <ContactInfo
                title="Visit us in the center of Berlin"
                buttonText="Copy address"
              >
                <p className="text-text-sm mt-4 max-w-[660px] font-sans font-medium">
                  <span className="text-orange font-bold">Address</span> |
                  Mailing | Appointments
                </p>
                <p className="text-text-md font-demi mt-2">
                  Schreiber Building
                </p>
                <p>c/o Name Name</p>
                <p>Blockstrasse 23a</p>
                <p>10179 Berlin</p>
              </ContactInfo>
              <ContactInfo
                title="Contact us in urgent cases"
                buttonText="Call now"
              >
                <p className="text-text-sm mt-4 max-w-[660px] font-sans font-medium">
                  <span className="text-orange font-bold">Phone</span> | Ring!
                  Ring!
                </p>
                <p className="text-text-md font-demi mt-2">Berlin Office</p>
                <p>+49 30 1234567</p>
                <p className="text-text-sm mt-4 max-w-[660px] font-sans font-medium">
                  <span className="text-orange font-bold">E-Mail</span> | Ring!
                  Ring!
                </p>
                <p className="text-text-md font-demi mt-2">hello@my500.com</p>
              </ContactInfo>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
