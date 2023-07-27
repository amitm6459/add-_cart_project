import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../pages/store/cartSlice';

import { STATUS, fetchProducts } from '../pages/store/productSlice';

const Products = () => {

    const dispatch = useDispatch();
    const {data:products,status} = useSelector((state) =>state.product)
    // const [products,setProducts] = useState([]);
    useEffect(() =>{

         dispatch(fetchProducts());

      //  const fetchProducts = async ()=>{
      //    const res = await fetch("https://fakestoreapi.com/products");

      //    const data = await res.json();
      //    console.log(data);
      //    setProducts(data)

      //  }
      //  fetchProducts()
    },[])


    const handleAdd = (product)=>{
      dispatch(add(product)); 
    }
    
    if(status === STATUS.LOADING){

      return <h2>loading.....</h2>
    }
    if (status === STATUS.ERROR) {
      return <h2>Somthing went wrong.....</h2>
    }
  return (
    <div  className='productsWrapper'>
       
       {
        products.map(product =>(
            
            <div className='card' key={product.id}>
              <img src={product.image} alt='product'/>
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className='btn'  onClick={()=> handleAdd(product)}>Add to cart</button>

            </div>
        )
        )
       }
    </div>
  )
}

export default Products
