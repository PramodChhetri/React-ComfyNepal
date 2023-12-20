import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
// import icon
import {BsBag} from'react-icons/bs';
// import image
import Logo  from '../img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {itemAmount} = useContext(CartContext);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  // event listerner
  useEffect(()=> {
    window.addEventListener('scroll', () =>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return <header className={`${isActive ? 'bg-gray-100 shadow-md' : 'bg-none'} fixed w-full z-10`}>
    <div className='container mx-auto flex justify-between items-center h-full'>
    <Link to={'/'}>
    <div>
      <img alt='logo' src={Logo} className='w-[40px]' />
    </div>
    </Link>
  {/* Cart */}
  <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
    <BsBag className='text-2xl' />
    <div className='bg-red-900 absolute -right-2 -border-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>{itemAmount}</div>
  </div>
  </div>
  </header>;
};

export default Header;
