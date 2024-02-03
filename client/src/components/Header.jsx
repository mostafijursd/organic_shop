import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
function Header() {
  return (
    <div className=' fixed shadow-md w-full h-16 px-2 md:px-4 bg-green-400 z-50'>
        {/* desktop */}
<div className=' flex items-center h-full justify-between'>

<Link to={""} >
{/*  logo here start */}
<div className=' h-14 flex gap-2 '>
<img src={logo}  className=' h-full  border-2 border-soild border-green-900  rounded-full'/>
<div className='  justify-between mt-3 '><span className=' text-3xl italic  text-white '>Organic Shop</span></div>
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


<div className='text-2xl text-slate-600'>

   <div className=' border-2 border-solid border-slate-600 p-1 rounded-full'>
   <FaUserAlt/>
   </div>

</div>
</div>
{/* menu here end */}

</div>


{/*mobile */}
    </div>
  )
}

export default Header