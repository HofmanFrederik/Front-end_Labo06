'use client'

import Image from 'next/image'
import { useState } from 'react'
import Logo from '../Generic/Logo'
import MenuHamburger from '../Actions/Menu/MenuHamburger'
import TypoHeader from '../typo/TypoHeader'
import ContactPerson from '../Contact/ContactPerson'
import ContactInfo from '../Contact/ContactInfo'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className="pointer-events-none fixed top-0 right-0 bottom-0 z-50 w-full">
      {/* Logo Wrapper - Verborgen op mobiel via 'hidden lg:block' */}
      <div className="pointer-events-auto hidden lg:block">
        <Logo
          className={`fixed top-8 z-30 w-[150px] transition-all duration-500 ease-in-out lg:top-24 lg:w-[238px] ${
            isOpen ? 'left-4 lg:left-10' : 'right-4 lg:right-[66px]'
          }`}
        />
      </div>

      {/* Sideblock - translate-x-full is verwijderd zodat hij op mobiel in beeld blijft */}
      <div
        className={`sideblock pointer-events-auto fixed top-0 z-30 flex h-screen flex-col items-center transition-all duration-500 ease-in-out lg:z-10 ${
          isOpen
            ? 'left-0 w-[80px] bg-transparent lg:w-[25%] lg:bg-gray-200'
            : 'right-0 w-[80px] bg-transparent lg:w-1/5 lg:bg-gray-200'
        }`}
      >
        <div className="mt-auto mb-10 lg:mb-[66px]">
          <MenuHamburger isOpen={isOpen} toggle={toggleMenu} />
        </div>
      </div>

      <div
        className={`MenuSection pointer-events-auto fixed inset-y-0 right-0 z-20 w-full overflow-x-hidden overflow-y-auto bg-gray-200 transition-transform duration-500 ease-in-out lg:w-[75vw] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex w-full flex-col justify-between gap-4 bg-white px-6 py-6 font-sans font-medium text-gray-700 md:flex-row lg:px-10">
          <p>
            <span className="font-bold">About</span> | Contact | Imprint
          </p>
          <p>Twitter | Instagram | Behance</p>
        </nav>

        <div className="relative flex min-h-screen w-full flex-col px-6 pt-10 pb-20 lg:block lg:px-0 lg:pt-0">
          {/* Afbeelding 1: Schaalbaar op mobiel, exact 409x277 op desktop */}
          <div className="z-10 order-2 mb-8 flex justify-start lg:absolute lg:top-[118px] lg:left-[5%] lg:mb-0 lg:block xl:left-[170px]">
            <Image
              src="/image1.png"
              alt="Man in cafe"
              width={409}
              height={277}
              className="h-auto w-full max-w-[409px] object-cover contrast-125 grayscale lg:h-[277px] lg:w-[409px] lg:max-w-none lg:shrink-0"
            />
          </div>

          <div className="z-20 order-1 mb-6 lg:absolute lg:top-[120px] lg:left-[45%] lg:mb-0 xl:left-[610px]">
            <TypoHeader
              element="h2"
              level="headline"
              className="text-orange text-5xl lg:text-7xl"
            >
              The <br className="hidden lg:block" /> my500{' '}
              <br className="hidden lg:block" /> team
            </TypoHeader>
          </div>

          {/* Afbeelding 2: Schaalbaar op mobiel, exact 270x380 op desktop */}
          <div className="z-30 order-4 hidden md:block lg:absolute lg:top-[340px] lg:left-[35%] xl:left-[480px]">
            <Image
              src="/toren.png"
              alt="Berlin Tower"
              width={270}
              height={270}
              className="h-auto w-full max-w-[270px] object-cover grayscale lg:h-[270px] lg:w-[270px] lg:max-w-none lg:shrink-0"
            />
          </div>

          <div className="z-40 order-3 mb-10 w-full lg:absolute lg:top-[415px] lg:left-[5%] lg:mb-0 lg:max-w-[380px] xl:left-[80px]">
            <TypoHeader
              className="text-left text-3xl lg:text-right lg:text-4xl"
              level="subheadline"
              element="h3"
            >
              Isn&apos;t it easy to summarize thoughts in 500 words?
            </TypoHeader>
          </div>

          <div className="order-5 pt-4 lg:ps-[77px] lg:pt-[680px]">
            <p className="font-demi font-sans text-xl">The Name – MY500</p>
            <p className="text-small mt-4 max-w-[660px] font-sans font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed dia. Hui ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed dia.Text Default Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed dia.
            </p>

            <div className="streep mt-8 mb-10 h-[8px] w-full max-w-[324px] rounded-lg bg-black"></div>

            <ContactPerson
              name="Mr. Robinson"
              role="Senior Editor"
              email="hello@my500.com"
              tag="@mrrob"
              imageSrc="/person1.png"
              className="mt-6"
            />
            <ContactPerson
              name="Mrs. Jones"
              role="Senior Editor"
              email="hello@my500.com"
              tag="@mrses"
              imageSrc="/person2.png"
              className="mt-6"
            />

            <div className="mt-16 flex flex-col gap-12 lg:mt-24 xl:flex-row xl:gap-8">
              <ContactInfo
                title="Visit us in the center of Berlin"
                buttonText="Copy address"
              >
                <p className="mt-4 max-w-[660px] font-sans text-sm font-medium">
                  <span className="text-orange font-bold">Address</span> |
                  Mailing | Appointments
                </p>
                <p className="text-md font-demi mt-2">Schreiber Building</p>
                <p>c/o Name Name</p>
                <p>Blockstrasse 23a</p>
                <p>10179 Berlin</p>
              </ContactInfo>

              <ContactInfo
                title="Contact us in urgent cases"
                buttonText="Call now"
              >
                <p className="mt-4 max-w-[660px] font-sans text-sm font-medium">
                  <span className="text-orange font-bold">Phone</span> | Ring!
                  Ring!
                </p>
                <p className="text-md font-demi mt-2">Berlin Office</p>
                <p>+49 30 1234567</p>
                <p className="mt-6 max-w-[660px] font-sans text-sm font-medium">
                  <span className="text-orange font-bold">E-Mail</span> | Fast
                  Reply
                </p>
                <p className="text-md font-demi mt-2">hello@my500.com</p>
              </ContactInfo>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
