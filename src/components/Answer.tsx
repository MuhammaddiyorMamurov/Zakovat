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

interface Props{
    activeQuestions:number
    data:Data
    letters:string
}

function Answer({activeQuestions,data,letters}:Props) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-10 items-center justify-center mb-20">
            {
             data.questions[activeQuestions].answer
            .toUpperCase()
            .split(" ")
            .map((answer,i)=>{
                return(
                    <div className="flex" key={i}>{answer.split("").map((letter,i)=> {
                        return (
                            <span className="w-10 h-10 flex items-center justify-center text-xl font-bold border border-gray-400 " key={i}>
                                {letters.includes(letter) && letter}
                            </span>
                        )
                    })}</div>
                )
                
            })}
        </div>
  )
}

export default Answer
