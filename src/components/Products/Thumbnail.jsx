import PropTypes from 'prop-types';


const Thumbnail = ({ product }) => {
    return (
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-72 object-cover rounded-t-lg"
        />
    );
};
  
export default Thumbnail;


Thumbnail.propTypes = {
  product: PropTypes.arrayOf(PropTypes.string).isRequired,
};