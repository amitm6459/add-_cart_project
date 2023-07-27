import React from 'react'
 import { useSelector,useDispatch } from 'react-redux';
import { remove } from './store/cartSlice';
 
 
  const Cart = () => {


  const product= useSelector((state) => state.cart)
   
  const distpatch = useDispatch();
  
  const handleRemove = (productId) =>{
        distpatch(remove(productId))
  }
  return (
    <div >
      <h3>Cart</h3>
      <div className="cartWrapper">
        {

          product.map( (product) => (
             
                <div className='cartCard' key={product.id}>
                  <img  src={product.image} alt='product' />
                  <h5>{product.title}</h5>
                  <h5>{product.price}</h5>
                  <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
                </div>

              )
            
          )

        }
      </div>
    </div>
  )
}

export default Cart
