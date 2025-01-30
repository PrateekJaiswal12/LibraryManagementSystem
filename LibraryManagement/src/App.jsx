import { useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { useSelector } from 'react-redux';

function App() {

  const loggedInUser = useSelector((state) => state.authentication.loggedInUser);

  useEffect(() => {
    console.log(loggedInUser);
  },[loggedInUser])

  return (
    <>
      <HomePage /> 
    </>
  )
}

export default App
