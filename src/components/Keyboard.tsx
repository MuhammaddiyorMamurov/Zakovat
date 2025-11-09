import { Button } from "./ui/button"

type Props = {
    setLetters:React.Dispatch<React.SetStateAction<string>>
    letters:string
    answer:string | undefined
}

const keyboard:string[] = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
]

function Keyboard({setLetters,letters,answer}:Props) {
    const handleClick = (key:string)=>{
        setLetters((prev)=> prev+= key)
    };
  return (
    <div className="flex flex-col gap-6 items-center">
        {keyboard.map((str)=>{
            return (<div key={str} className="flex items-center gap-4">
                {str.toUpperCase().split("").map((key)=>{
                    return (
                    <Button disabled={letters.includes(key)} onClick={()=>handleClick(key)} key={key} className="text-xl font-bold">{key}</Button>
                    )
                })}
            </div>
            )
        })}
    </div>
  )
}

export default Keyboard
