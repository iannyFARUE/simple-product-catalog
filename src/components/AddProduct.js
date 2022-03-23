import React from 'react'
import { useState } from 'react'

export default function AddProduct({onPoductAdded}) {

    const [product,setProduct] = useState({name:'',price:'',category:'',stocked:false})

    function handleInputChange(e){
        const target = e.target
        let value = target.type == 'checkbox' ? target.checked : target.value
        const name = target.name
        if(name == 'price'){
            if(!value.startsWith("$")){
            value = "$".concat(value)
            }
        }
        setProduct({...product,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!product.name || !product.category || !product.price){
            return;
        }
      
        onPoductAdded(product)
        setProduct({name:'',price:'',category:'',stocked:false})
    }


  return (
    <div className='bg-slate-100 border-2 border-slate-300 mx-2 md:mx-0 md:h-screen mt-4 md:mt-0 mb-8 p-4'>
      <h1 className='font-thin text-2xl text-red-500 text-center pt-8'> Add Product</h1>
      <form className='p-2' onSubmit={handleSubmit}>
          <div className='p-4'>
              <label htmlFor="name" className='block w-full font-semibold'>Name </label>
              <input type="text" name='name' value={product.name} onChange={handleInputChange} className='block w-full p-2 border-2 border-blue-500 focus:outline-none focus:border-none focus:ring focus:ring-blue-700' />
          </div>
          <div className='p-2'>
              <label htmlFor="price" className='block w-full font-semibold'>Price </label>
              <input type="text" value={product.price} onChange={handleInputChange} name='price' className='block w-full p-2 border-2 border-blue-500 focus:outline-none focus:border-none focus:ring focus:ring-blue-700' />
          </div>

          <div className='p-2'>
              <label htmlFor="category" className='block w-full font-semibold'>Category </label>
              <select name="category" id="category" value={product.category} onChange={handleInputChange} className='block w-full p-3 border-2 border-blue-500 focus:outline-none focus:border-none focus:ring focus:ring-blue-700'>
                  <option value="">Choose category....</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Football">Football</option>

                  <option value="Standard Goods">Standard Goods</option>
                  <option value="Adult Entertainment">Adult Entertainment</option>
                  <option value="Gaming">Gaming</option>
              </select>
          </div>

          <div className='mt-4 p-2 flex  space-x-8 align-baseline'>
              <label htmlFor="stocked" className='font-semibold text-xl'>In Stock ? </label>
              <input type="checkbox" name='stocked' checked={product.stocked} onChange={handleInputChange} className='w-8 h-8' />
          </div>

          <div className='mt-4'>
              <label htmlFor="inStock" className='font-semibold text-xl'></label>
              <input type="submit" value="Add Product" name='inStock' className='bg-blue-700 px-8 py-2 border-none w-full text-white hover:bg-blue-400' />
          </div>
      </form>
        
    </div>
  )
}
