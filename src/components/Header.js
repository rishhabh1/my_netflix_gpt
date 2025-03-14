import React,{useEffect, useState} from 'react'
import {Netfliximg} from './Netfliximg'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";




const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      
      dispatch(removeUser());
      navigate('/')
      
    }).catch((error) => {
      
    });
  }

  const userData = useSelector((store)=>store.user);

  const [loading, setLoading] = useState(true);
  

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email}= user;
    
    dispatch(addUser({uid:uid,email:email,displayName:'rishi'}))
    navigate('/browse')
    
  } else {
    dispatch(removeUser());
    navigate('/')
  }

  setLoading(false);

  
});
return () => unsubscribe(); 
  },[dispatch,navigate])

  if (loading) return <div>Loading...</div>; 



  return (
    <div className='header flex justify-between w-full z-10 absolute px-8 py-5 bg-gradient-to-b from-black '>
        <Netfliximg/>
        {userData &&
<button onClick={handleSignOut}>Sign out</button>
}
    </div>
  )
}

export default Header