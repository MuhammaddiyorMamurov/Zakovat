import { Link } from "react-router-dom"

type Props = {
    open: boolean
    onRestart: () => void
  }
  
  function LoseModal({ open, onRestart }: Props) {
    if (!open) return null
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-xl text-center space-y-4">
          <h2 className="text-xl font-bold">Bir kun g'alaba , Bir kun mag'lubiyat.</h2>
          <button
            onClick={onRestart}
            className="bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            <Link to={"/Categories"}>Qaytadan boshlang</Link>
          </button>
        </div>
      </div>
    )
  }
  
  export default LoseModal
  