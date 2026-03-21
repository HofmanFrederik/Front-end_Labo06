'use client'

import { ArrowRight } from 'lucide-react'
import ButtonMain from '../components/Actions/Buttons/ButtonMain'
import ButtonIcon from '../components/Actions/Buttons/ButtonIcon'
import ButtonPlay from '../components/Actions/Buttons/ButtonPlay'
import MenuHamburger from '../components/Actions/Menu/MenuHamburger'
import SingleSelect from '../components/Select/SingleSelect'
import MultiSelect from '../components/Select/MultiSelect'
import Slider from '../components/Select/Slider'
import StepByStep from '../components/Select/StepByStep'

export default function actionAndSelect() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
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

      <SingleSelect
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />

      <MultiSelect
        options={[
          { label: 'Option A', value: 'optionA' },
          { label: 'Option B', value: 'optionB' },
          { label: 'Option C', value: 'optionC' },
        ]}
      />

      <Slider
        label="Description – Slider"
        min={0}
        max={10}
        step={1}
        defaultValue={6}
        lowLabel="Low Value"
        highLabel="High Value"
      />

      <StepByStep
        label=""
        steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
        defaultStep={2}
      />
    </div>
  )
}
