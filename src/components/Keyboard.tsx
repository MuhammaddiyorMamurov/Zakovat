import { toast } from "react-toastify";
import { Button } from "./ui/button"

type Props = {
    setLetters:React.Dispatch<React.SetStateAction<string>>
    setHeart:React.Dispatch<React.SetStateAction<{isLive:boolean}[]>>;
    setLoseModal: React.Dispatch<React.SetStateAction<boolean>>

    letters:string;
    answer:string | undefined
    heart:{isLive:boolean}[]
}

const keyboard:string[] = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
]

function Keyboard({setLetters,letters,answer,setHeart,heart,setLoseModal}:Props) {
    const handleClick = (key:string)=>{
        setLetters((prev)=> prev+= key)
        if(!answer?.toUpperCase().includes(key)){
            if(heart[1].isLive){
                toast.warning("Xato harf")
                setHeart([{isLive:true}, {isLive:false}])
            }else{
                setHeart([{isLive:false}, {isLive:false}])
                setLoseModal(true)
                
            }
        }
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
