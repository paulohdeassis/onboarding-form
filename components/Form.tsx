'use client'

import useMultistepForm from '@/hooks/useMulitstepForm'
import React, { Children, ReactElement } from 'react'

 type props = {
    formSteps: ReactElement[]
 }

const Form = ({formSteps}:props) => {

const { steps, step, currerntStep } = useMultistepForm(formSteps)


  return (
  <form action="" className='relative bg-white p-8 m-4 rounded-3xl text-black'>
    <div className='absolute top-2 right-2 bg-slate-500'>
        {currerntStep + 1} / { steps.length}
    </div>
     {steps[currerntStep]}
  </form>
  )
}

export default Form
