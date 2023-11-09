import ProductList from "../components/Products/ProductsList";
import Slider from "../components/UI/Layouts/Slider";
import { getProducts } from "../helpers/api";

export default function Products() {
    const products = getProducts()

    return (
        <>
        <Slider products={products}/>
        <ProductList products={products}/>
      </>
    )
  }