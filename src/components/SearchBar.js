import React from 'react'

export default function SearchBar({filteredText,inStockOnly,onFilterTextChange,onInStockOnlyChange}) {

    function handleFilterChange(e){
        onFilterTextChange(e.target.value)
    }

    function handleInStockOnlyChange(e){
        onInStockOnlyChange(e.target.checked)
    }



  return (
   <form className='p-4 m-2 '>
       <h2 className='text-center font-thin text-2xl p-4 text-blue-400'>Filter Products</h2>
       <input type="text" className='block w-full p-2 border-2 border-blue-500 focus:outline-none focus:border-none focus:ring focus:ring-blue-700'  placeholder='Search ....' value={filteredText} onChange={handleFilterChange} />
       <p className='pt-5 flex space-x-3'>
           <input type="checkbox" className='w-8 h-8' checked={inStockOnly} onChange={handleInStockOnlyChange}/>
           { ' '}
          <span className='pt-2'> Only show products in stock</span>
       </p>
   </form>
  )
}
