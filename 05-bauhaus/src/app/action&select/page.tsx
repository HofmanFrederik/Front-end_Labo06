'use client'

import { ArrowRight } from 'lucide-react'
import ButtonMain from '../components/Actions/Buttons/ButtonMain'
import ButtonIcon from '../components/Actions/Buttons/ButtonIcon'
import ButtonPlay from '../components/Actions/Buttons/ButtonPlay'
import MenuHamburger from '../components/Actions/Menu/MenuHamburger'

export default function actionAndSelect() {
  return (
    <div className="flex items-center gap-4 p-6">
      <ButtonMain element="Button" type="default-outline">
        Default button
      </ButtonMain>

      <ButtonMain
        element="Button"
        type="icon-outline"
        icon={<ArrowRight size={18} />}
      >
        Button met icon
      </ButtonMain>

      <ButtonMain
        element="Button"
        type="default-solid"
        icon={<ArrowRight size={18} />}
      >
        Button met icon
      </ButtonMain>

      <ButtonMain
        element="Button"
        type="icon-solid"
        icon={<ArrowRight size={18} />}
      >
        Button met icon
      </ButtonMain>

      <ButtonIcon
        element="button"
        type="outline"
        icon={<ArrowRight size={18} />}
      />

      <ButtonIcon
        element="button"
        type="solid"
        icon={<ArrowRight size={18} />}
      />

      <ButtonPlay element="button" type="play" variant="outline" />

      <ButtonPlay element="button" type="play" variant="solid" />

      <MenuHamburger />
    </div>
  )
}
