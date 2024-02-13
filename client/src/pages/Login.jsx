import React, { useState } from 'react';
import loginImg from '../assets/loginImg.png';
import { BiShow } from "react-icons/bi";

import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Login() {

    const[showPassword,setShowPassword]=useState(false);
  
    const [data,setData]=useState({
        
        email:"",
        password:"",
       
    });
    

    const handleShowPassword =()=>{
        setShowPassword(preve=>!preve)
        
    };
     const handleShowCpassword=()=>{
        setShowCpassword(preve=>!preve)
     };
      const handleOnChange =(e)=>{
const {name,value}=e.target
setData((preve)=>{
    return{
        ...preve,
        [name]:value
    }
});
 
      };
      const handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=data
        if( email && password ){
            
                alert("successful")
                

            
        }else{
            alert("please Enter required  fields")
        }
         
          }
  return (
    <div className=' p-3 md:p-4'>

<div className=' w-full max-w-sm bg-white m-auto flex  flex-col p-4 rounded'>
{/* <h1 className=' text-center text-2xl font-bold'>Sign up</h1> */}
<div className=' w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
    <img src={loginImg} className=' w-full'/>
</div>

 <form className=' w-full py-3 flex flex-col' onSubmit={handleSubmit}>


<label htmlFor="email">Email</label>
<input 
type={"text"}
 name='email'
  id='email'
   className=' w-full mt-1 mb-2 bg-slate-200 px-2 py-1  rounded  focus-within:outline-blue-300 ' 
   value={data.email}
   onChange={handleOnChange}
   />
<label htmlFor="password">Password</label>
<div className=' flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline  focus-within:outline-blue-300  '>
<input type={ showPassword ? "text":"password"} 
name="password"
 id="password"
  className=' w-full bg-slate-200  border-none outline-none' 
  
   value={data.password}
   onChange={handleOnChange}
   />
<span className=' flex text-xl cursor-pointer' onClick={handleShowPassword}>{ showPassword ? <BiShow/>:<BiHide/>}</span>
</div>


<button className=' w-full  max-w-[150px] m-auto bg-lime-600
 hover:bg-lime-700 cursor-pointer text-white text-xl font-medium
  text-center  py-1 rounded-full mt-4 '>Login</button>
 </form>
 <p className=' text-left text-sm mt-2'>Don't have accout ? {" "} <Link to={"/signup"} 
 className=' text-blue-500'>Signup</Link></p>
</div>

    </div>
  )
}

export default Login