import React from 'react'
import { Link } from 'react-router-dom'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import resume from '../../public/assets/Abilash M_Resume.pdf'
import "@react-pdf-viewer/core/lib/styles/index.css"

const Resume = () => {

  return (
    <div className="d-flex flex-column justify-content-center align-item-center vh-100">
            <h1 className='text-center py-5'>Resume</h1>
            <div className=" p-3 vh-100">
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js'>
                    <Viewer fileUrl={resume}/>
                </Worker>
            </div>
            <div className="d-flex justify-content-center py-3">
                <Link to="/"><button className='btn btn-danger text-white'>Back</button></Link>
            </div>
    </div>
  )
}

export default Resume