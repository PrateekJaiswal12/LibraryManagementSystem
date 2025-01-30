import React from 'react'

const Modal = ({ toggleModal, content }) => {
  return (
    <div className='fixed inset-0 z-10 bg-black bg-opacity-20'>
        <div className='fixed z-50 md:w-1/3 w-full h-fit flex flex-col items-center justify-start rounded-2xl shadow-lg bg-slate-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-4 pb-4'>
            <h5 className='self-start rounded-full font-bold cursor-pointer' onClick={toggleModal} >x</h5>
            {content}
        </div>
    </div>
  )
}

export default Modal
