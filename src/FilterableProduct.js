import React from 'react'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import { useState } from 'react'
import AddProduct from './components/AddProduct'

export default function FilterableProduct({products}) {

    const [inStockOnly,setInStockOnly] = useState(false)
    const [filteredText,setFilteredText] = useState('')

    function handleProductAdded(){

    }

  
  return (
      <>
 <div className='border border-slate-300'>
 <SearchBar
      filteredText={filteredText}
      inStockOnly={inStockOnly}
      onFilterTextChange={(value)=>setFilteredText(value)}
      onInStockOnlyChange={value=>setInStockOnly(value)}
      />
      <ProductTable 
      products={products}
      filteredText={filteredText}
      inStockOnly={inStockOnly}
      />
 </div>
      </>
    
  )
}
