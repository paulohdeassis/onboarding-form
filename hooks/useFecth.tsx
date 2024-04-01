import { useQuery  } from 'react-query'
import axios from 'axios'


const token = process.env.DIRECTUS_TOKEN

export const useFetch = (userEmail: string) => {
  console.log(token)
    const config = {
        headers:{
          Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`
        }
      }
    
      const url = `https://cms.celmedia.com.br/items/students?&filter[User_Email][_eq]=${userEmail}`
      return useQuery({
            queryFn: async () =>{
            const  { data }  = await axios.get(url, config)
            return  data
          },
      })

}



  