import ButtonMain from '../components/Actions/Buttons/ButtonMain'
import Nav from '../components/Nav/Nav'
import NavBar from '../components/Nav/NavBar'
import TypoHeader from '../components/typo/TypoHeader'


export default function home() {
  return (
    <>
      <header>
        <NavBar title="Bauhaus" subtitle="There is always a solution" />
        <Nav />
      </header>
      <div className="max-w-3xl px-24 py-44">
        <TypoHeader className="text-orange" element="h2" level="headline-small">
          Bigger, Better, Faster, Stronger but what if you age is 70+?
        </TypoHeader>
        <p className="mt-[70px] font-sans text-sm font-medium text-black">
          <span className="text-orange font-bold">Read</span> | 467 words | June
          2018
        </p>
        <p className="font-demi mt-5 max-w-[494px] text-lg/5 text-black">
          Times are changing fast and whilst some of us were simply born into
          this meteoric times there are others who were not. How do our
          grandparents feel about change?
        </p>
        <ButtonMain className="mt-10">Read More</ButtonMain>
      </div>
    </>
  )
}
