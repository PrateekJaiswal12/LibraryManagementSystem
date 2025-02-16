import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage/HomePage'
import { fetchUser } from './redux/slices/AuthSlice';
import ProfilePage from './pages/ProfilePage';
import CatalogPage from './pages/CatalogPage';



function App() {

  const loggedInUser = useSelector((state) => state.authentication.loggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    // console.log(user)
    if(userId && !loggedInUser) {
      dispatch(fetchUser({
        userId,
        property: 'loggedInUser'
      }));
    }
  },[loggedInUser])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage/>} >
        <Route index element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/resource/:barcode' element={<>Resource</>} />
        <Route path='/profile/:userId' element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
