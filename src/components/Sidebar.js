import React, { useContext } from 'react';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import components
import CartItem from '../components/CartItem';
// import context 
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext );
  const {cart, clearCart, total, itemAmount} = useContext(CartContext);
  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw]  transition-all duration-300 z-20 px-4 lg-px-[35px]`}>
    <div className="flex items-center justify-between py-6 border-b">
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
      {/* icon */}
      <div onClick={handleClose} className='cursor-pointer'>
      < IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className=' flex flex-col  gap-y-2 h-[520px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b'>
      { cart.map(item => {
        return <CartItem item={item} key={item.id} />
      }) }
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full  justify-between items-center'>
          {/* total  */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total: </span>$ {total}
          </div>
          {/* clear cart */}
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-8 h-8 flex rounded justify-center items-center text-xl'><FiTrash2/></div>
        </div>
      </div>
  </div>;
};

export default Sidebar;
