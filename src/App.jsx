import {
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import TodoPractice from './pages/TodoPractice'
import NotFound from './pages/NotFound'
import ProductDetails from './components/Products/ProductDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    // route / is wrapping the other routes because we want them to start with /, we can also do nested routes by making another layout with new navlinks
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="todo" element={<TodoPractice />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App