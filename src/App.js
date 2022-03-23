import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddProduct from './components/AddProduct';
import FilterableProduct from './FilterableProduct';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  const [products, setProducts]= useState(PRODUCTS)

  function handleProductAdded(product){
    setProducts([...products,product])
  }

  return (
    <div className='md:grid md:grid-cols-2'>
   <div className="md:col-start-2 md:col-end-3" >
   <AddProduct
    
    onPoductAdded={handleProductAdded}
    />
   </div >
   <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:h-screen" >
   <FilterableProduct products={products} />

   </div>
    </div>
  );
}

export default App;
