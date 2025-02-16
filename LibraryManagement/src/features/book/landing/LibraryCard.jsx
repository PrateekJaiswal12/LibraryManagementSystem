import React from 'react'
import libraryCard from "../../../assets/libraryCard.png"
import { useDispatch } from 'react-redux'
import { setDisplayLibraryCard } from '@/redux/slices/ModalSlice';

const LibraryCard = () => {

    const dispatch = useDispatch();

    const handleDisplayModal = () => {
        dispatch(setDisplayLibraryCard(true));
    }

  return (
    <div className='w-[98%] h-fit rounded-lg p-4 flex mt-4 flex-col justify-center items-center shadow-xl'>
      <hr />
      <h2 className='text-3xl text-slate-600 p-4 font-bold'>Get A Library Card</h2>
      <img src={libraryCard} alt="loading.." className='w-1/2 my-4' />
      <p className='text-pretty italic'>Learn how to get your own Library Card <span className='underline hover:text-cyan-600 cursor-pointer' onClick={handleDisplayModal}>here.</span></p>
    </div>
  )
}

export default LibraryCard
