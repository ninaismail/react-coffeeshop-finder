import './App.css'
import OrdersForm from './components/OrdersForm'
import ProductList from './components/Products/ProductList';

import { getProducts } from './helpers/api';
import Slider from './components/UI/Layouts/Slider';
function App() {
const products = getProducts()
  return (
    <>
      <Slider products={products}/>
      <div className='w-full h-full flex justify-center items-center flex-wrap mt-5'>
        <ProductList products={products}/>
        <OrdersForm />
      </div>
    </>
  )
}

export default App
