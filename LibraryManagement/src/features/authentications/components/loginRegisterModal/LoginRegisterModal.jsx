import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayLogin } from '@/redux/slices/ModalSlice';

import Modal from '@/components/modals/Modal'
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../registerForm/RegisterForm';



const LoginRegisterModal = () => {

    const authState = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    const  [login, setLogin] = useState(true)

    const closeModal = () => {
        dispatch(setDisplayLogin(false));
    }

    const toggleLogin = () => {
        setLogin(!login);
    }

    useEffect(() => {
        if(authState.loggedInUser) {
          closeModal();
        }

        return (() => {
          if(authState.loggedInUser) {
            localStorage.setItem('userId', authState.loggedInUser._id);
          }
        })

    }, [authState.loggedInUser])

  return (
    <Modal 
      content={login? <LoginForm toggleRegister={toggleLogin}/> : <RegisterForm toggleLogin={toggleLogin}/>}
      toggleModal={closeModal}
    />
  )
}

export default LoginRegisterModal;
