import { Link } from "react-router-dom"

const Product = ({ id, name, description, price, image }) => {
    return (
      <li key={id} className="md:w-[32%] w-1/2 bg-white shadow-lg rounded-lg p-4">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-32 rounded-t-lg"
        />
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-700">{description}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-green-500">{price}</span>
            <div className='flex flex-wrap'>
              <button className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700 me-1">Add to Cart</button>
              <Link to={`${id}`} className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700">View Product</Link>
            </div>
          </div>
        </div>
      </li>
    );
};
  
export default Product;