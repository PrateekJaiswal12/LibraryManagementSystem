import LoginRegisterModal from '@/features/authentications/components/loginRegisterModal/LoginRegisterModal';
import React from 'react'
import { useSelector } from 'react-redux';
const HomePage = () => {

  const displayLogin = useSelector((state) => state.modal.displayLogin);

  return (
    <div>
      <h1>Home Page</h1>
      {(displayLogin == true) ? <LoginRegisterModal /> : <></>}
    </div>
  )
}

export default HomePage
