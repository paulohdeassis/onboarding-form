'use client'

import Form from "@/components/Form";
import FirstStep from "@/components/FirstStep";
import SecondStep from "@/components/SecondStep";
import { QueryClient, QueryClientProvider } from "react-query";
import stepContext from "@/contexts/stepsContext";


const queryCLient = new QueryClient()
export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <stepContext.Provider value={{
          stepNumber:0,
          userEmail: ''
          }}>
            
            <Form formSteps ={[
              <FirstStep/>,
              <SecondStep/>        
            ]}
            />

        </stepContext.Provider>
      </QueryClientProvider>
   </>
  );
}
