import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const Product = ({ id, name, description, price, image }) => {
    return (
      <li key={id} className="md:w-[32%] w-1/2 bg-white shadow-lg rounded-lg p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-700">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-green-500 font-semibold">{price}</span>
            <div className='flex flex-wrap'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded me-1">Add to Cart</button>
              <Link to={`${id}`} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">View Product</Link>
            </div>
          </div>
        </div>
      </li>
    );
};
  
export default Product;


Product.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};