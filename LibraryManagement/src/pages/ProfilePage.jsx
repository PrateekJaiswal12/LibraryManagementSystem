import UpdateUserForm from '@/features/profile/UpdateUserForm';
import { fetchUser } from '@/redux/slices/AuthSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

const ProfilePage = () => {

    const loggedInUser = useSelector((state) => state.authentication.loggedInUser);
    const profileUser = useSelector((state) => state.authentication.profileUser);
    const dispatch = useDispatch();

    const { userId } = useParams();
    const navigate = useNavigate();

    // console.log(loggedInUser)

    useEffect(() => {
        if(userId === loggedInUser?._id || loggedInUser?.type === 'EMPLOYEE' ) {
            dispatch(fetchUser({
                userId,
                property: 'profileUser'
            }));
        }   else {
            navigate("/");
        }

    },[userId, loggedInUser])

  return (
    <div className='flex items-center justify-center shadow-2xl'>
      <div className="container">
        <h1 className='text-2xl left-2 p-2 m-2 font-semibold'>{ profileUser?.firstName } { profileUser?.lastName }'s Profile</h1>
        <div className="h-fit w-full flex shadow-xl justify-between">
            <div className="h-full w-2/5 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <UpdateUserForm />
            </div>
            <div className="w-[59%] rounded-lg h-[79vh] shadow-lg p-4 overflow-hidden">

            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
