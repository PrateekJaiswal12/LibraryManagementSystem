import { setDisplayLogin } from '@/redux/slices/ModalSlice';
import { Book, Search } from '@mui/icons-material';
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate , Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';



const NavBar = () => {

    const searchRef = useRef(null);
    const authState = useSelector((state) => state.authentication)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEnterKey = (e) => {
        if(e.key == 'Enter' && searchRef && searchRef.current && searchRef.current.value.length > 0) {
            navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`);
            searchRef.current.value = '';
        }
    }

    const handleSearchedIconClicked = (e) => {
        if(e.key == 'Enter' && searchRef && searchRef.current && searchRef.current.value.length > 0) {
            navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`);
            searchRef.current.value = '';
        }
    }

    const navigateToProfile = () => {
        if(authState.loggedInUser) {
            navigate(`/profile/${authState.loggedInUser._id}`)
        }
    }

    const toggleLogin = () => {
        dispatch(setDisplayLogin(true));
    }

  return (
    <nav className='w-full h-[80px] flex items-center font-semibold md:text-xl justify-evenly pl-16 pr-11 bg-slate-300 '>
        <Link to="/" className='w-1/4 h-fit flex items-center justify-start decoration-none '>
            <Book className='w-4'/>
            <h1 className='text-3xl text-bold'>My Library</h1>
        </Link>
        <div className="w-3/4 h-fit flex flex-row items-center justify-end">
            <Link to="/catalog" className='h-full w-fit p-3 rounded-xl'>
                <Button>View Catalog</Button>
            </Link>
            <div className="flex mr-4 items-center justify-center relative w-2/5 ">
                <Input placeholder="Search catalog" className=" w-3/4 focus:ring-2 focus:outline-none text-3xl" onKeyDown={handleEnterKey} ref={searchRef} />
                <Search onClick={handleSearchedIconClicked} className='cursor-pointer text-3xl absolute right-14' />
            </div>
            {
                authState.loggedInUser ? 
                <div className="h-full w-fit p-3 rounded-xl " onClick={navigateToProfile}>
                    <h2 className="text-3xl">{authState.loggedInUser.firstName}'s Account</h2>
                </div> 
                :
                <div className="h-full w-fit p-3 rounded-xl " onClick={toggleLogin}>
                    <Button className="bg-slate-50 text-black hover:bg-white">Login</Button>
                </div> 
            }
        </div>
    </nav>
  )
}

export default NavBar
