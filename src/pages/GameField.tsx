import { Button } from "@/components/ui/button"
import Loading from "@/components/ui/Loading"
import useFetch from "@/hooks/useFetch"
import { useState } from "react"
import { useParams } from "react-router-dom"

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

const keyboard:string[] = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
]

function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch<Data>(`questions/${id}`)
    const [activeQuestions, setActiveQuestions] = useState(0)


    if(loading){
        return <Loading/>
    }
  return (
    <div className="container py-10">
        <h2 className="text-2xl font-bold text-center mb-10">{data && data?.questions[1].question}</h2>

        <div className="flex flex-wrap gap-x-5 gap-y-10 items-center justify-center mb-20">
            {data &&
             data.questions[1].answer
            .toUpperCase()
            .split(" ")
            .map((answer,i)=>{
                return(
                    <div className="flex" key={i}>{answer.split("").map((letter,i)=> {
                        return (
                            <span className="w-10 h-10 flex border border-gray-400 " key={i}>
                                {false && letter}
                            </span>
                        )
                    })}</div>
                )
                
            })}
        </div>


    <div className="flex flex-col gap-6 items-center">
        {keyboard.map((str)=>{
            return (<div key={str} className="flex items-center gap-4">
                {str.toUpperCase().split("").map((key)=>{
                    return (
                    <Button key={key} className="text-xl font-bold">{key}</Button>
                    )
                })}
            </div>
            )
        })}
    </div>
    </div>
  )
}

export default GameField
