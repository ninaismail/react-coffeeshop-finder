const Thumbnail = ({ product }) => {
    return (
        <img
          src={product?.image}
          alt={product?.name}
          className="object-cover w-full rounded-t-lg h-72"
        />
    );
};
  
export default Thumbnail;