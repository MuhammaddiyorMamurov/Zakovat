import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"


function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] rounded-lg px-6 py-10 border border-accent bg-accent flex flex-col gap-10">
        <Button onClick={()=> navigate("/categories")} size={"xlg"}>
          <Play size={32} />
        </Button>
        <Link className="self-center hover:text-primary hover:underline" to={"/instruction"}>
        Qo'llanma
        </Link>
      </div>
    </div>
  )
}

export default Home
