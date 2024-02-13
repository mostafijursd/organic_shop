import React, { useState } from 'react';
import loginImg from '../assets/loginImg.png';
import { BiShow } from "react-icons/bi";
import process from 'process'
import { BiHide } from "react-icons/bi";
import { Link,useNavigate } from 'react-router-dom';
import { ImagetoBase } from '../utility/imagetoBase';
function Signup() {
    const navigate=useNavigate()
    const[showPassword,setShowPassword]=useState(false);
    const[showCpassword,setShowCpassword]=useState(false);
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        image:"",
    });
    {/* image upload */}
 const handleUploadProfileImage= async(e)=>{

const data=await ImagetoBase(e.target.files[0]);

console.log(data);
 setData((preve)=>{
return {
    ...preve,
    image:data
}
 })
 };
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

      console.log(process.env.REACT_APP_SERVER_DOMIN);
      const handleSubmit= async(e)=>{

        e.preventDefault();
        const {firstName,email,password,confirmPassword}=data
        if(firstName && email && password && confirmPassword){
            if(password=== confirmPassword){
                const fetchData= await fetch("")
                alert("successful")
                navigate("/login")

            } else{
                alert("password and confirm password not equal")
            }
        }else{
            alert("please Enter required  fields")
        }
         
          }
  return (
    <div className=' p-3 md:p-4'>

<div className=' w-full max-w-sm bg-white m-auto flex  flex-col p-4 rounded'>
{/* <h1 className=' text-center text-2xl font-bold'>Sign up</h1> */}
<div className=' w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto cursor-pointer relative'>
    <img src={data.image ? data.image : loginImg} className=' w-full h-full'/>
     <label htmlFor="profileImage">
    <div className=' absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center'>
        <p className=' text-sm text-white'>Upload</p>
    </div>
    <input type={"file"} name="" id="profileImage" accept='image/*' className=' hidden'  onChange={handleUploadProfileImage}/>
    </label>
</div>

 <form className=' w-full py-3 flex flex-col' onSubmit={handleSubmit} >
<label htmlFor="firstName" > FirstName</label>
<input
 type={"text"}
 name="firstName" 
id="firstName" className=' w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 ' 
 value={data.firstName}
 onChange={handleOnChange}
/>
<label htmlFor="lastName">LastName</label>
<input
 type={"text"} 
name="lastName" 
id="lastName" 
className=' w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300  ' 
value={data.lastName}
onChange={handleOnChange}
/>
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
<label htmlFor="confirmpassword"> Confirm Password</label>
<div className=' flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline  focus-within:outline-blue-300  '>
<input type={ showCpassword ? "text":"password"}
 name="confirmPassword"
  id="confirmPassword"
   className=' w-full bg-slate-200  border-none outline-none'
    value={data.confirmPassword} 
    onChange={handleOnChange}
    />
<span className=' flex text-xl cursor-pointer' onClick={handleShowCpassword}>{ showCpassword ? <BiShow/>:<BiHide/>}</span>
</div>

<button className=' w-full  max-w-[150px] m-auto bg-lime-600 hover:bg-lime-700 cursor-pointer text-white text-xl font-medium text-center  py-1 rounded-full mt-4 '>Sign up</button>
 </form>
 <p className=' text-left text-sm mt-2'>Alredy have account ? <Link to={"/login"} className=' text-blue-500'>Login</Link></p>
</div>

    </div>
  )
}

export default Signup