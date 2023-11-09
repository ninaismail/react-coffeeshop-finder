import PropTypes from 'prop-types';
import { getProductById } from '../../helpers/api';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    const id = params.id
    console.log(id)
    const product = getProductById(id)
    console.log(product)

    return (
    <div className="md:w-8/12 w-full mx-auto">
        <h1 className="text-2xl">Product Details</h1>
        {product &&
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-500 font-semibold">{product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </>}
    </div>
    );
};
  
export default ProductDetails;


ProductDetails.propTypes = {
   id: PropTypes.string.isRequired,
};