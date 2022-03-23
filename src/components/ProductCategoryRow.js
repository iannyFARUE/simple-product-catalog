import React from 'react'

export default function ProductCategoryRow({category}) {
  return (
   
    <tr className="bg-blue-400 border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4 text-white" colSpan={2}>{category}</td>
    </tr>
  )
}
