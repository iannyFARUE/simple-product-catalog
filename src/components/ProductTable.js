import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import ProductHead from './ProductHead'

export default function ProductTable({products,inStockOnly, filteredText}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {

        if(product.name.toLowerCase().indexOf(filteredText.toLowerCase()) === -1){
            return;
        }

        if(inStockOnly && !product.stocked){
            return;
        }

        if(product.category !== lastCategory){
            rows.push(
                <
                    ProductCategoryRow
                    category={product.category}
                    key={product.category}
                
                />
            )
        }
        rows.push(
            <ProductRow
            product={product}
            key={product.name}
            />
        )
        lastCategory = product.category
    })
  return (
 <div className='relative overflow-x-auto shadow-md sm:rounded-lg m-4 '>
        <table className='w-full text-sm text-left text-gray-500'>
        <thead className='bg-gray-50 text-gray-700'>
        <ProductHead/>
        </thead>
        <tbody >
            {rows}
        </tbody>
    </table>
 </div>
  )
}
