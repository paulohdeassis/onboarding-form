import { useQuery  } from 'react-query'
import axios from 'axios'



const token = process.env.DIRECTUS_TOKEN

export const useFetch = (userEmail: string) => {
    const config = {
        headers:{
          Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`
        }
      }
    
      const url = `https://cms.celmedia.com.br/items/students?access_token=${token}&filter[User_Email][_eq]=${userEmail}&fields=Name,Instagram_URL,MG_Email,MG_URL,Phone`
      return useQuery({
            queryFn: async () =>{
            const  { data }  = await axios.get(url, config)
            return  data
          },
      })

}



  