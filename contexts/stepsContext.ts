import { createContext } from "react";

type contextType = {
    stepNumber: number,
    userEmail: string,
    mgEmail?:string,
    instagramUrl?:string,
    userNiche?:string,
    phoneNumber?:string
}

const stepContext = createContext<contextType | null >(null)

export default stepContext