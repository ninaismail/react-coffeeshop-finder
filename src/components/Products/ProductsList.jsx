import PropTypes from 'prop-types';


import Product from './Product';
const ProductList = ({products}) => {
    return (
      <ul className='w-full flex justify-center items-center flex-wrap gap-4'>
          {Array.isArray(products)&&products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product?.name}
              description={product?.description}
              price={product?.price}
              image={product?.image}
            />
          ))}
      </ul>
    );
  };
  
export default ProductList;


ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};