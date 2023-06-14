import PropTypes from 'prop-types';


import Button from './Button';

const SecondaryButton = ({onClick, label}) => {
  return (
    <Button onClick={onClick} label={label} className="bg-gray-100 hover:bg-gray-300 text-blue-500 font-bold py-2 px-4 border border-blue-700 rounded" />
  );
};

export default SecondaryButton;


SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};