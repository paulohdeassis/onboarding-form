import { ReactElement, useState } from "react";

const useMultistepForm = (steps: ReactElement[]) => {
    const [currerntStep, setCurrentStep] = useState(0)


    const next = () =>{
        setCurrentStep(i => {
        if( i>= steps.length - 1) return 1
           return i + 1 
        })
    }

    const back = () => {
        setCurrentStep(i => {
            if( i <= 0) return 1
               return i - 1 
            })
    }

    const goTo = (index:number) =>{
        setCurrentStep(index)        
    }

    return {
        currerntStep,
        step: steps[currerntStep],
        steps,
        goTo,
        next,
        back,
    }
}

export default useMultistepForm