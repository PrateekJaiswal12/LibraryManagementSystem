import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Create } from '@mui/icons-material';

import { resetUser, updateUser } from '@/redux/slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const UpdateUserForm = () => {

    const userState = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    const [displayUpdate, setDisplayUpdate] = useState(false);
    const [user, setUser] = useState(userState.profileUser);

    const navigate = useNavigate();

    const updateUserState = (e) => {
        setDisplayUpdate(true);
        if(e.target.name && e.target.value && user) {
            setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }
    }

    const submitUpdatedUser = (e) => {
        e.preventDefault();
        if(user) dispatch(updateUser(user))
        
        setDisplayUpdate(false);
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("userId");
        dispatch(resetUser('loggedInUser'));
        dispatch(resetUser('profileUser'));
        navigate("/");
    }

    useEffect(() => {
        if(!user) {
            setUser(userState.profileUser);
        }
    } , [userState.profileUser, user])

  return (
    <form className='h-full w-full flex flex-col justify-center items-center'>
        <div className="w-full h-fit mb-4 relative">
            <Label htmlFor="firstName">First Name:</Label>
            <Input 
                className="h-8 w-full text-2xl font-semibold" 
                name="firstName" 
                value={user?.firstName ?? ""}  
                onChange={updateUserState}
                disabled={userState.loggedInUser?._id !== userState.profileUser?._id}
            />
            {userState.loggedInUser?._id === userState.profileUser?._id && <Create className='absolute top-[50%] right-[2%] ' />}
        </div>
        <div className="w-full h-fit mb-4 relative">
            <Label htmlFor="lastName">Last Name:</Label>
            <Input 
                className="h-8 w-full text-2xl font-semibold" 
                name="lastName" 
                value={user?.lastName ?? ""}  
                onChange={updateUserState}
                disabled={userState.loggedInUser?._id !== userState.profileUser?._id}
            />
            {userState.loggedInUser?._id === userState.profileUser?._id && <Create className='absolute top-[50%] right-[2%] ' />}
        </div>
        <div className="w-full h-fit mb-4 relative">
            <Label htmlFor="email">Email:</Label>
            <Input 
                className="h-8 w-full text-2xl font-semibold" 
                name="email" 
                value={user?.email ?? ""}  
                onChange={updateUserState}
                disabled={userState.loggedInUser?._id !== userState.profileUser?._id}
            />
            {userState.loggedInUser?._id === userState.profileUser?._id && <Create className='absolute top-[50%] right-[2%] ' />}
        </div>
        {displayUpdate ? <Button className="w-[90%] text-xl rounded-lg mt-4 bg-slate-300 hover:bg-slate-200 text-black shadow-2xl" onClick={submitUpdatedUser} >Update Profile</Button> : <></>}
        {userState.loggedInUser?._id === userState.profileUser?._id ? <Button className="w-[90%] shadow-lg text-xl rounded-lg mt-4" onClick={logout} >Logout Of Account</Button> : <></>}
    </form>
  )
}

export default UpdateUserForm
