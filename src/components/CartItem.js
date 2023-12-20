import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import context
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  const {id, title, image, amount, price} = item;
  return <div className='flex gap-x-4 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
  <div className='w-full min-h-[150px] flex items-center gap-x-4'>
    <Link to={`/product/${id}`} >
      {/* image */}
      <img className='max-w-[80px] h-auto ' src={image} alt="" />
    </Link>
    <div className='w-full flex flex-col'>
    <div className='flex justify-between mb-2 ' >
      {/* title  */}
      <Link to={`/product/${id}`} className='text-sm uppercase max-w-[240px] font-medium text-primary hover:underline'>{title}</Link>
      {/* remove icon  */}
      <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer item-center'><IoMdClose className='text-gray-500 hover:text-red-500 transition' /></div>
    </div>
    <div className=' flex gap-x-2 h-[36px] text-sm'>
      <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
      {/* quantity */}
      <div onClick={() => decreaseAmount(id)} className='flex flex-1 justify-center items-center h-full cutsor-pointer  border-r'>
        {/* minus icon */}
        <IoMdRemove />
      </div>
      <div className='h-full flex justify-center items-center px-4'>{amount}</div>
      <div onClick={() => increaseAmount(id)} className='flex flex-1 justify-center items-center h-full cutsor-pointer border-l'>
        {/* plus icon */}
        <IoMdAdd/>
      </div>
      </div>
      {/* item price */}
      <div className=' flex flex-1 justify-around items-center'>$ {price}</div>
      {/* final price  */}
      <div className='flex flex-1 justify-end items-center text-primary font-medium'>$ {`${parseFloat(amount * price).toFixed(2)}`}</div>
    </div>
    </div>
  </div>
  </div>;
};

export default CartItem;
