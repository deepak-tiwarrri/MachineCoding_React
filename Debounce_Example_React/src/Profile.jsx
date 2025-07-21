import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className=''>
            <h2 className='text-lg '>This is your username: {user}</h2>
            <input type="text" className='p-4 mx-auto' name='user' value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
    )
}

export default Profile;