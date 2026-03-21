'use client'

import TextArea from '../components/Form/FormTextArea'
import TextInput from '../components/Form/FormTextInput'
import Overlay from '../components/Overlay/Overlay'

export default function FormPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6 p-6">
      <TextInput
        label="Email"
        type="email"
        name="email"
        placeholder="name@example.com"
      />

      <TextInput
        label="Password"
        type="password"
        name="password"
        state="invalid"
        placeholder="Enter your password"
        errorMessage="This password is invalid."
      />

      <TextArea
        label="Message"
        name="message"
        placeholder="Enter your message"
      />

      <Overlay backgroundColor="red">
        <p>This is the content of the overlay.</p>
      </Overlay>
    </div>
  )
}
