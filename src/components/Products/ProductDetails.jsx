import { getProductById } from '../../helpers/api';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    const id = params.id
    console.log(id)
    const product = getProductById(id)
    console.log(product)

    return (
    <div className="w-full mx-auto md:w-8/12">
        <h1 className="text-2xl">Product Details</h1>
        {product &&
          <>
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-t-lg"
            />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-500">{product.price}</span>
                <Link to={`/mycard`} className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Add To Card</Link>
              </div>
            </div>
          </>}
    </div>
    );
};
  
export default ProductDetails;