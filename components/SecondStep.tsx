import React from 'react'
import { useFetch } from '@/hooks/useFecth'
import { userData } from '@/app/page'

type SecondStepProps = userData & {
  updateFields: (fields: Partial<userData>) => void
}

const SecondStep = ({userEmail, updateFields}: SecondStepProps) => {
  const { data } = useFetch(userEmail || '')

  return (
    <div>
      {data?.data[0]}
      <label className='block' htmlFor="userName">
        Your Name
          <input className='border-solid border-2 border-black block' name='userName' type='text' onChange={e => updateFields({ userName: e.target.value})}>
          </input>
      </label>
    </div>
  )
}

export default SecondStep