import React, { useContext } from 'react'
import { UserContext } from "./UserContext.js";
import Profile from "./Profile";
const Home = () => {
    const { user } = useContext(UserContext);
    return <div className='flex align-center mt-4  flex-col'>
        <h1 className='text-xl '>Welcome! {user}</h1>
        <Profile />
    </div>
}

export default Home;