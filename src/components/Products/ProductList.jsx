import PropTypes from 'prop-types';


import Product from './Product';
const ProductList = ({products}) => {
    return (
      <div className='md:w-2/3 w-full flex justify-center items-center flex-wrap gap-[4px]'>
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
      </div>
    );
  };
  
export default ProductList;


ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};