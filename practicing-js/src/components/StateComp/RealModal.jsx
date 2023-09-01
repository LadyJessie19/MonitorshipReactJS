import React from 'react'
import './RealModal.css'

const RealModal = ({setIsOpen}) => {
  return (
    <div className='modal' onClick={() => setIsOpen(false)}>
        <div className="modal-content">
            <button className="button" onClick={() => setIsOpen(false)}>&times;</button>
            <p>Isso é um modal!</p>
        </div>
    </div>
  )
}

export default RealModal