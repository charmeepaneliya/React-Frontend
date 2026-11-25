import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import React, { useEffect } from 'react'
import fetchProduct from '../features/productThunk'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = () => {
    const dispatch = useDispatch();
     useEffect(()=>{
        dispatch(fetchProduct());
    },[fetchProduct]);

    const {loading,error,products}=useSelector((state)=>state.products)

    if(loading){
        return <h1 style={{textAlign:"center"}}>Loading.....</h1>
    }

    if(error){
        return <h1 style={{textAlign:"center",color:"red"}}>{error}</h1>   
    }

  return (
    <>
      <table>
        <thead>
            <tr>
            <th>sr no</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
        </tr>
        </thead>
        <tbody>
            {products.map((p,index)=>{
                return(
                    <tr key={p.id} >
                        <td>{index + 1}</td>
                        <td>{p.title}</td>
                        <td>{p.price}</td>
                        <td>{p.category}</td>
                        <td><img src={p.image} alt={p.title} style={{height:"200px"}}/></td>
                    </tr>
                )
            })}
        </tbody>
        
      </table>

    </>
  )
}

export default ProductList
