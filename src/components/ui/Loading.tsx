import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <PacmanLoader color="white"/>
    </div>
  )
}

export default Loading
