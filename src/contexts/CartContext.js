import React, {useState, createContext, useEffect} from 'react';

// export context 
export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  // update item Amount
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator, currentItem)=>{
        return accumulator + 1;
      },0);
      setItemAmount(amount);
      }
    }, [cart]);

  useEffect(()=>{
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.price *  currentItem.amount);
    }, 0);
    setTotal(total.toFixed(2));
  }, [cart]);

    // remove from cart
  const removeFromCart = (id) => {
      const newCart = cart.filter(item => {
        return item.id !== id;
      });
      setCart(newCart);
    };

  const addToCart = (product, id) => {
  const newItem = {...product,amount: 1};

  // check if item is already added
  const cartItem = cart.find((item) => {
    return item.id === id;
  });

  // if cartitem is already in the cart
  if(cartItem){
    const newCart = [...cart].map(item => {
      if(item.id === id){
        return {...item, amount: cartItem.amount + 1};
      }else{
        return item;
      }
    });
    setCart(newCart);
  }else{
    setCart([...cart, newItem]);
  }
  };

  // clear cart items
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id)
  }

   // decrease amount
   const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if(cartItem){
      if(cartItem.amount > 1  ){
      const newCart = cart.map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
    }
   };


  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
    {children}
  </CartContext.Provider>;
};



export default CartProvider;
