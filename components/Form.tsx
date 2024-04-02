'use client'

import useMultistepForm from '@/hooks/useMulitstepForm'
import React, { ReactElement } from 'react'
import { isValid, z } from 'zod'
import { Alert, AlertTitle, AlertDescription } from './ui/alert'


 type props = {
    formSteps: ReactElement[],
    formData: userData,
 }

 

const formSchema = z.object({
  userName: z.string().min(3).optional(),
  userEmail:z.string().email().optional(),
  mgEmail: z.string().email().regex(new RegExp(".+@mgmarketingagency\.com"),).optional(),
  instagramUrl: z.string().regex(new RegExp("^https:\/\/www\.instagram\.com\/.*$"),).optional(),
  userNiche: z.enum(['Car Dealerships', 'Cosmetic Procedures', 'Dentists', 'Ecommerce', 'Insurance Brokers',
  'Plastic Surgeons', 'Real State Agents', 'Digital Marketing (Generic)']).optional(),
  phoneNumber: z.string().regex(new RegExp("^[0-9]*$")).optional()

})

export type userData = z.infer<typeof formSchema>

const Form = ({formSteps, formData}:props) => {

const { steps, step, currerntStep, next, back } = useMultistepForm(formSteps);


  return (
  <form action="" className='text-black'>
    <div className='absolute top-2 right-2'>
        {currerntStep + 1} / { steps.length}
    </div>
     {step}
      <div className='flex gap-8'>
          {currerntStep !== 0 ? <button onClick={back}>
            back
          </button> : ''}
          <button className='text-red' onClick={() => {
            // if(formSchema.safeParse({userEmail: formData.userEmail}).success === true){
              return next()
            // }
            // return 
          }} type='button'>next</button>
      </div>
  </form>
  )
}

export default Form
