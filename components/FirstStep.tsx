import React, { useContext, useDeferredValue } from 'react'
import { z } from 'zod'
import { userData } from './Form'
import { Input } from './ui/input'
import { Label } from './ui/label'


type firstStepProps = userData & {
  updateFields: (fields: Partial<userData>) => void
}

const FirstStep = ({ updateFields }: firstStepProps) => { 
const schema  = z.string().email()


    return (
    <>
        <h2 className='text-black'> teste</h2>
        <Label htmlFor="email"> 
          <Input  autoFocus placeholder='Your Email Adress' id='email'  name='email'  type='email'   onChange={e => updateFields({ userEmail: e.target.value })} />
        </Label>
    </>
  )
}

export default FirstStep