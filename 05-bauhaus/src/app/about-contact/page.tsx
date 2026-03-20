'use client'

import { useEffect, useState } from 'react'
import TypoHeader from '../components/typo/TypoHeader'

export default function AboutContact() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <>
      <TypoHeader element="h1" level="headline">
        Hey Mensen
      </TypoHeader>
      <TypoHeader element="h2" level="headline-small">
        About Us
      </TypoHeader>
      <TypoHeader element="h3" level="headline-small">
        test
      </TypoHeader>

      <p className="font-sans">
        Because the world is round, it turns me on {screenWidth}px
      </p>
    </>
  )
}
