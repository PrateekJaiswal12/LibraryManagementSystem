import LoginRegisterModal from '@/features/authentications/components/loginRegisterModal/LoginRegisterModal';
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import NavBar from '@/features/navigation/NavBar';
import Footer from '@/features/navigation/Footer';
import LibraryCardModal from '@/features/authentications/components/LibraryCardModal';



const LayoutPage = () => {

    const state = useSelector((state) => state.modal);

  return (
    <div className='w-full relative'>
        {state.displayLogin && <LoginRegisterModal/>}
        {state.displayLibraryCard && <LibraryCardModal />}
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default LayoutPage
