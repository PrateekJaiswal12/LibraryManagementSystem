import Modal from '@/components/modals/Modal';
import { setDisplayLibraryCard } from '@/redux/slices/ModalSlice';
import React from 'react'
import { useDispatch } from 'react-redux'
import RegisterLibraryCardForm from './RegisterLibraryCardForm';

const LibraryCardModal = () => {

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(setDisplayLibraryCard(false));
    }

  return (
    <Modal content={<RegisterLibraryCardForm />} toggleModal={closeModal} />
  )
}

export default LibraryCardModal
