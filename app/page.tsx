'use client'

import Form from "@/components/Form";
import FirstStep from "@/components/FirstStep";
import SecondStep from "@/components/SecondStep";
import ThirdStep from "@/components/ThirdStep";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { userData } from "@/components/Form";



const formData: userData = {
  userName: '',
  userEmail: '',
  mgEmail: '',
  instagramUrl: '',
  userNiche: 'Digital Marketing (Generic)',
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
            <section className="grid content-center">
              <h1>Wellcome Aboard!</h1>
              <Form formSteps ={[
                <FirstStep  updateFields={updateFields} />,
                <SecondStep updateFields={updateFields} userEmail={data.userEmail}/>,    
                <ThirdStep updateFields={updateFields}  mgEmail={data.mgEmail} />
              ]}
              formData={data}
              />
            </section>
          </main>
      </QueryClientProvider>
  );
}
