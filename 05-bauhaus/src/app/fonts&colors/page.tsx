'use client'

import TypoHeader from '../components/typo/TypoHeader'

export default function fontsAndColors() {
  return (
    <div className="fonts-and-colors flex h-screen overflow-hidden">
      <div className="left bg-light-gray relative h-full w-1/2 shrink-0 px-16">
        <div className="headers absolute top-1/2 flex -translate-y-1/2 flex-col gap-12">
          <TypoHeader element="h1" level="headline">
            Reross | 70
            <br />
            Headline
          </TypoHeader>

          <TypoHeader element="h2" level="headline-small">
            Reross | 50
            <br />
            Headline Small
          </TypoHeader>

          <TypoHeader element="h3" level="subheadline">
            Reross | 34
            <br />
            Subheadline
          </TypoHeader>
        </div>

        <div className="colors absolute right-0 bottom-0 left-0 flex h-8">
          <div className="flex-1 bg-black"></div>
          <div className="bg-dark-gray flex-1"></div>
          <div className="bg-gray flex-1"></div>
          <div className="bg-light-gray flex-1"></div>
          <div className="border-light-gray flex-1 border bg-white"></div>
          <div className="bg-orange flex-1"></div>
        </div>
      </div>

      <div className="right min-w-0 flex-1 bg-white px-22 pt-34 pb-12">
        <div className="max-w-[560px] space-y-10">
          <p className="font-demi text-text-lg font-sans leading-[1.25] text-black">
            Futura PT, 18 – Demi
            <br />
            Subheadline, Highlighted text
          </p>

          <p className="text-text-md font-sans leading-[1.55] font-medium text-black">
            Futura PT, 16 – Medium
            <br />
            Text Default
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed dia. Hui ipsum dolor sit amet, consetur sadipscing elitr,
            sed diam nonumy eirmod tempor.
          </p>

          <div className="text-text-md space-y-2 font-sans font-medium text-black">
            <p>Futura PT, 16 – Medium</p>
            <p>– Keywords</p>
            <p>– Short Description</p>
          </div>

          <p className="text-text-md text-gray font-sans leading-[1.45] font-medium">
            Futura PT, 16 – Medium
            <br />
            Input field, additional Information or Hints, Image Credits
          </p>

          <p className="text-text-sm font-sans leading-[1.45] font-medium text-black">
            <span className="underline">Futura PT, 14 – Medium</span>
            <br />
            Text Link, Image Credit with link to website
          </p>

          <p className="text-text-sm font-sans leading-[1.45] font-medium text-black">
            Futura PT, 14 – Medium
            <br />
            Input field description, small running text, Timestamp
          </p>
        </div>
      </div>
    </div>
  )
}
