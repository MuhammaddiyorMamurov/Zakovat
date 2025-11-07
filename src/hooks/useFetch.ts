import { BASE_URL } from "@/api/baseUrl"
import { useEffect, useState } from "react"

type Param = "documentation" | `questions/${string}`| "categories"

function useFetch<T>(param:Param){
    const[data, setData] = useState<T | null>(null)
    const[error, setError]=useState<String | null>(null)
    const[loading,setLoading]=useState(false)

    async function fetchData(){
        setLoading(true)
        try{
            const response = await fetch(BASE_URL + param)
            if(!response.ok){
                throw new Error("Error founded:" + response.status)
            }
            const data = await response.json()
            setData(data)
        }catch(error:any){
            setError(error.message)
        }finally{
        setLoading(false)
    }
    }

    useEffect(()=>{
        fetchData()
    },[param])


    return {data, error, loading}
}

export default useFetch