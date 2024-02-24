import Product from './Product';
const ProductList = ({products}) => {
    return (
      <ul className='flex flex-wrap items-center justify-center w-full gap-4'>
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