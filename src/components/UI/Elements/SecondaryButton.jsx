import Button from './Button';

const SecondaryButton = ({onClick, label}) => {
  return (
    <Button onClick={onClick} label={label} className="px-4 py-2 font-bold text-blue-500 bg-gray-100 border border-blue-700 rounded hover:bg-gray-300" />
  );
};

export default SecondaryButton;