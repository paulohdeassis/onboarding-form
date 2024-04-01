import React, { useContext, useDeferredValue } from 'react'
import { z } from 'zod'
import { userData } from '@/app/page'
// o envet handler não está funcionando,
// pra ir para o próximo passo preciso passar o index do step para o contexto
// lidar com o contexto no hook de form 


type firstStepProps = userData & {
  updateFields: (fields: Partial<userData>) => void
}

const FirstStep = ({ updateFields }: firstStepProps) => { 
const schema  = z.string().email()


    return (
    <>
        <h2 className='text-black'> teste</h2>
        <label htmlFor="email"> 
          <input className='border-2 border-black' autoFocus placeholder='Your Email Adress'  name='email'  type='email'   onChange={e => updateFields({ userEmail: e.target.value })} />
        </label>
    </>
  )
}

export default FirstStep