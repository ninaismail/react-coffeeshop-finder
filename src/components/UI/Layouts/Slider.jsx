import PropTypes from 'prop-types';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Thumbnail from '../../Products/Thumbnail';

const Slider = ({products}) => {


  return (
    <Carousel>
        {Array.isArray(products) && products.map(product => 
        <Thumbnail 
          key={product?.id} 
          product={product} 
        />
        )}
    </Carousel>
  );
};

export default Slider;


Slider.propTypes = {
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
  };