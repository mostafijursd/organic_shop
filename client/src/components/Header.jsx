import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
function Header() {

  const [showMenu,setShowMenu]=useState(false);
   const handleShowMenu =()=>{
    setShowMenu(preve=>!preve)
   }

  return (
    <div className=' fixed shadow-md w-full h-16 px-2 md:px-4 bg-green-400 z-50'>
        {/* desktop */}
<div className=' flex items-center h-full justify-between'>

<Link to={""} >
{/*  logo here start */}
<div className=' h-12 flex gap-2 '>
<img src={logo}  className=' h-full '/>
<div class='md:justify-between md:mt-2 md:rounded-full md:shadow'>
  <span class='text-lime-900 md:italic md:text-2xl'>Organic <span class='text-slate-300'>Shop</span></span>
</div>

</div>
{/*  logo here end */}
</Link>
{/* menu here start */}
<div className=' flex items-center  gap-4 md:gap-7'>
<nav className=' flex gap-4 md:gap-7 text-base md:text-lg'>
<Link to={""}>Home</Link>
<Link to={"menu"}>Menu</Link>
<Link to={"about"}>About </Link>
<Link to={"contact"}>Contact</Link>
</nav>
 <div className=' text-3xl text-slate-600 relative'>
<IoMdCart/>
<div className=' absolute -top-2 -right-2 w-4 h-4 text-sm mb-0 p-0 text-white bg-red-700 rounded-full text-center '>0</div>
 </div>


<div className=' text-slate-600' onClick={handleShowMenu}>

   <div className=' text-3xl'>
   <HiOutlineUserCircle/>
   </div>
   {
    showMenu && ( <div className=' absolute right-2 bg-white py-4 px-2 shadow drop-shadow-md flex flex-col'>
    <Link to={"newproduct"} className=' whitespace-nowrap cursor-pointer'>New Products</Link>
    <Link to={"login"} className=' whitespace-nowrap cursor-pointer'>Login</Link>
     </div>
  ) }

</div>
</div>
{/* menu here end */}

</div>


{/*mobile */}
    </div>
  )
}

export default Header