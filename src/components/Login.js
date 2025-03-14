import React, { useRef, useState } from "react";
import Header from "./Header";
import { imagesurl } from "../utils/images";
import { checkValidationData } from "../utils/validate";
// eslint-disable-next-line
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";


import { addUser } from "../utils/userSlice";


const Login = () => {
  // const [email,setEmail]=useState('')
  // const [password,setPassword]=useState('')



  const dispatch = useDispatch();
  
  
  

  const email = useRef(null);
  const password = useRef(null);
  const [toggleSignIn, setToggleSignIn] = useState(false);

  const [checkStatus, setCheckStatus] = useState(null);

  
  const handleButtonClick = (e) => {
    e.preventDefault();
    const valmsg = checkValidationData(email.current.value, password.current.value);
    setCheckStatus(valmsg)
    if(valmsg) return;

  


    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    // eslint-disable-next-line
    const user = userCredential.user;


    dispatch(addUser({uid:user.uid,email:user.email,displayName:user.displayName}))

 
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    
    setCheckStatus(errorCode)
    
    // ..
  });

  };

  

  const handlePassword=()=>{
   password.current.type= password.current.type=== 'password'?'text':'password'
  }


  
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={imagesurl.bgimg} alt="bg-img" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black top-20 my-36 mx-auto min-w-min right-0 left-0">
        <h1 className="text-white">{toggleSignIn ? "Sign In" : "Sign up"}</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 mt-4"
          // value={email}
            

          ref={email}
          
          readOnly
          onFocus={(e) => e.target.removeAttribute("readOnly")} 
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
        />
        
        <input
          type='password'
          placeholder="Password"
            
              
          className="p-2 mt-4"
          ref={password}
          //  name="real-password"
          autoComplete="off" 
        />
        <span 
        onClick={handlePassword} className="cursor-pointer">
        {/* {showPassword ? "👁️" : "👁️‍🗨️"} */}
        👁️
        </span>

        <span className="text-[red] mt-1 block">{checkStatus}</span>
        <button
          onClick={handleButtonClick}
          className="p-3 mt-4 bg-[red] text-[#fff] w-full"
        >
          {toggleSignIn ? "Sign In" : "Sign up"}
        </button>

        <button
          className="text-white mt-3 "
          onClick={(e) => {
            e.preventDefault();
            setToggleSignIn(!toggleSignIn);
          }}
        >
          don't have account {toggleSignIn ? "Sign In" : "Sign up"}?
        </button>
      </form>
    </div>
  );
};

export default Login;
