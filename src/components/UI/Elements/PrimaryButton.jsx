import Button from './Button';

const PrimaryButton = ({onClick, label}) => {
  return (
    <Button onClick={onClick} label={label} className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700" />
  );
};

export default PrimaryButton;