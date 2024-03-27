import React from 'react'
import { z } from 'zod'
import useMultistepForm from '@/hooks/useMulitstepForm'
import { useFetch } from '@/hooks/useFecth'


// o envet handler não está funcionando,
// pra ir para o próximo passo preciso passar o index do step para o contexto
// lidar com o contexto no hook de form 

const FirstStep = () => {
  // const handleClick = (e) => {
  //   window.alert('teste')
  //   e.preventDefault
  //   console.log(userEmail)
  //   const data = useFetch(userEmail)
  //   console.log(data)
  // }
 
const schema  = z.string()
let userEmail = '1'


    return (
    <>
        <h2 className='text-black'> teste</h2>
        <label className='text-black' htmlFor="email">
          <input className='border-2 border-black' value={userEmail} autoFocus  onChange={(e)=>{
            userEmail = e.target.value
          }} id='email' type='email'></input>
        </label>

        <button type='submit' onClick={(e)=>{
          window.alert('teste')
        }}>
          teste
        </button>
    </>
  )
}

export default FirstStep