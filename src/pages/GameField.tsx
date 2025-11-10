import Answer from "@/components/Answer"
import Keyboard from "@/components/Keyboard"
import LoseModal from "@/components/LoseModal"
import Modal from "@/components/Modal"
import Loading from "@/components/ui/Loading"
import useFetch from "@/hooks/useFetch"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



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
    ])
    const [openModal, setOpenModal] = useState(false);
    const [isLoseModalOpen, setIsLoseModalOpen] = useState(false)



    useEffect(()=>{
        let timeOut:number
        if(data?.questions[activeQuestions].answer.toUpperCase().split("").every((l)=>letters.includes(l) || l == " "))
           {
            timeOut = setTimeout(()=>{
             if(data?.questions.length - 1 == activeQuestions) {
                setLetters("")
                setActiveQuestions(0)
                setOpenModal(true)

             } else{
                setLetters("")
                setActiveQuestions((prev)=>prev + 1)
             } 
                    
                
            }, 2000)
            
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
    setHeart={setHeart}
    heart={heart}
    setLoseModal={setIsLoseModalOpen}
    />

<LoseModal 
        open={isLoseModalOpen}
        onRestart={() => {
          setIsLoseModalOpen(false)
          setHeart([{isLive: true}, {isLive: true}])
          setLetters("")
          setActiveQuestions(0)
        }}
      />

    <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
    <h2 className="text-xl font-bold text-center mb-4">Bosqish Yakunlandi</h2>
    <p className="text-center mb-4">Yangi kategoriya tanlang</p>
    <div className="flex justify-center items-center">
    <button 
      onClick={() => setOpenModal(false)} 
      className="bg-green-700 text-white px-4 py-2 rounded-lg"
    >
      <Link to={"/Categories"}>Back</Link>
    </button>
    </div>
</Modal>

    </div>
  )
}

export default GameField
