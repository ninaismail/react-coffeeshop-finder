import PropTypes from 'prop-types';


import Button from './Button';

const PrimaryButton = ({onClick, label}) => {
  return (
    <Button onClick={onClick} label={label} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" />
  );
};

export default PrimaryButton;


PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};