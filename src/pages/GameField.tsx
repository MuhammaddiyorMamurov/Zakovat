import Answer from "@/components/Answer"
import Keyboard from "@/components/Keyboard"
import Loading from "@/components/ui/Loading"
import useFetch from "@/hooks/useFetch"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"


interface Question{
    id:number
    answer:string
    question:string
}

interface Data {
    id:number
    name:string
    questions:Question[]
}

function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch<Data>(`questions/${id}`)
    const [activeQuestions, setActiveQuestions] = useState(0)
    const [letters, setLetters] = useState<string>("")
    const [heart, setHeart]= useState([
        {isLive:true},
        {isLive:true},
        {},
    ])

    useEffect(()=>{
        let timeOut:number
        if(data?.questions[activeQuestions].answer.toUpperCase().split("").every((l)=>letters.includes(l) || l == " "))
           {
            timeOut = setTimeout(()=>{
                
                    setLetters("")
                     setActiveQuestions((prev)=>prev + 1)
                
            }, 2000)
            toast.success("To'g'ri toptingiz, Keyingi")
        }

        return ()=> clearTimeout(timeOut)
    }, [letters])

    if(loading){
        return <Loading/>
    }

  return (
    <div className="container py-10">
        <h2 className="text-2xl font-bold text-center mb-10">{data && data?.questions[activeQuestions].question}</h2>

        <div className="flex items-center justify-center gap-4 mb-10">
        {heart.map((h,i)=>{
          return  h.isLive ? <Heart key={i} size={34} color="red"/> : <Heart key={i} size={34} color="gray"/>
        })}
        </div>
        

    {data &&<Answer letters={letters} activeQuestions={activeQuestions} data={data}/>}
    <Keyboard setLetters={setLetters} letters={letters }
    answer={data?.questions[activeQuestions].answer}
    setHeart={setHeart}/>
    </div>
  )
}

export default GameField
