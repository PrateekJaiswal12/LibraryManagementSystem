import { getLibraryCard } from '@/redux/slices/AuthSlice';
import { setDisplayLibraryCard, setDisplayLogin } from '@/redux/slices/ModalSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RegisterLibraryCardForm = () => {

    const userState = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    const handleCreateLibraryCard = () => {
        if(userState.loggedInUser) {
            dispatch(getLibraryCard(userState.loggedInUser?._id));
        }
    }

    const handleLoginClick = () => {
        dispatch(setDisplayLibraryCard(false));
        dispatch(setDisplayLogin(true));
    }

  return (
    <>
        {
            userState.loggedInUser ? (
            <div className="bg-slate-50 p-6 max-w-md mx-auto text-center">
                <h3 className="text-xl font-semibold text-slate-600">
                Welcome {userState.loggedInUser.firstName} {userState.loggedInUser.lastName}!
                </h3>
                <h5 className="text-sm text-gray-600 mt-2">
                To sign up for a new library card, or if you forgot the ID number on your card, use the button below.
                </h5>

                {userState.libraryCard ? (
                <p className="mt-4 text-lg font-medium text-blue-600">
                    Your library card number: <span className='hover:underline'>{userState.libraryCard}</span>
                </p>
                ) : (
                <button 
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                    onClick={handleCreateLibraryCard}
                >
                    Get Library Card
                </button>
                )}
            </div>
            ) : (
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 max-w-md mx-auto text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                You must be a member of the library to obtain a library card.
                </h3>
                <h4 className="text-sm text-gray-600 mt-2">
                Use the button below to log in to your account or register for free.
                </h4>
                <button 
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                onClick={handleLoginClick}
                >
                Login Here
                </button>
            </div>

        )}
 
    </>
  )
}

export default RegisterLibraryCardForm
