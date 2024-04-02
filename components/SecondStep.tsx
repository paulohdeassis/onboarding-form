import React from 'react'
import { useFetch } from '@/hooks/useFecth'
import { userData } from './Form'
import { Label } from './ui/label'
import { Input } from './ui/input'

type SecondStepProps = userData & {
  updateFields: (fields: Partial<userData>) => void
}

const SecondStep = ({userEmail, updateFields}: SecondStepProps) => {
  const { data } = useFetch(userEmail || '')

  return (
    <div>
      {data?.data[0]}
      <Label className='block' htmlFor="userName">
        Your Name*
          <Input name='userName' placeholder='John Doe' type='text' onChange={e => updateFields({ userName: e.target.value})} />
          <p>First and last name, just as you put it on your registration.</p>
      </Label>

      <Label htmlFor="phoneNumber">
        Email Address*
        <Input type="text" placeholder='(999) 999-9999'
          onChange={e => updateFields({ phoneNumber: e.target.value})} />
        <p>Include your country and area code, make sure to only inlcude the numbers</p>
      </Label>
    </div>
  )
}

export default SecondStep