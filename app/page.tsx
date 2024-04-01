'use client'

import Form from "@/components/Form";
import FirstStep from "@/components/FirstStep";
import SecondStep from "@/components/SecondStep";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { userData } from "@/components/Form";



const formData: userData = {
  userId: '',
  userEmail: '',
  mgEmail: '',
  instagramUrl: '',
  userNiche: '',
  phoneNumber: ''
}


const queryCLient = new QueryClient()
export default function Home() {

  const [data, setData] = useState(formData)

  const updateFields = (fields: Partial<userData>) => {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  return (
  
      <QueryClientProvider client={queryCLient}>
          <main className="bg-main-purple text-white grid content-center gap-4">
            <section className="max-w-20 grid content-center">
              <h1>Wellcome Aboard!</h1>
              <Form formSteps ={[
                <FirstStep  updateFields={updateFields} />,
                <SecondStep updateFields={updateFields} userEmail={data.userEmail}/>        
              ]}
              formData={data}
              />
            </section>
          </main>
      </QueryClientProvider>
  );
}
