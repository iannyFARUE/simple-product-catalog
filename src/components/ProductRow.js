import React from 'react'

export default function ProductRow({product}) {

    const name = product.stocked ? product.name : <span style={{color:'red'}}> {product.name}</span>

  return (
   
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{product.price}</td>
    </tr>
  )

}
