import React from 'react'
import logo from '../../public/assets/white-logo.png'

const Loading = () => {
  return (
    <div className='loading bg-black w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className="border rounded-5 ">
            <img src={logo} alt="loading" width={30} />
        </div>
    </div>
  )
}

export default Loading