import useFetch from "@/hooks/useFetch";
import {type FetchType } from "@/model/model";
import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Data {
  id:number
  title:string
  text:string
}

function Document() {
  const navigate = useNavigate()
  const{data,loading} = useFetch<FetchType<Data>>("documentation")
  
  if(loading){
    return <Loading />
  }

  
  return (
    <div className="py-10">
      <div className="container mb-10 flex items-center justify-between">
            <Button onClick={()=> navigate("/")}>
            <Undo2 />
            </Button>
            <h2 className="text-5xl font-bold">How to Play</h2>
            <span></span>
      </div>
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-3">
      {data && data.data.map((obj)=>{
        return <div className="border border-gray-400 rounded-sm px-4 py-8" key={obj.id}>
          <h2 className="text-xl font-bold mb-4">{obj.title}</h2>
          <p>{obj.text}</p>
        </div>
      })}
      </div>
    </div>
  )
}

export default Document
