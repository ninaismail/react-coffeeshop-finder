import PropTypes from 'prop-types';


import { useImperativeHandle, useRef } from "react";
const Input = (
    {id,
    type,
    required,
    label,
    value,
    ref,
    isValid,
    placeholder,
    onChange,
    validationMessage,
    className
  }
  ) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div className={`${className} flex flex-col gap-3`}>
        <label className="lg:text-2xl md:text-2xl sm:text-[16px] text-text3" htmlFor={id}>
          {label} {required && <span className="text-red-600">{" *"}</span>}
        </label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-14 px-4 placeholder:text-gray-400 placeholder:text-sm text-gray-600 border-2 border-gray-200 hover:border-blue-700 outline-none rounded-lg"
          required={required}
        />
        {required && (
          <div
            className={`text-red-600 text-sm ${
              isValid == false ? "max-h-20" : "max-h-0"
            } overflow-hidden transition-all duration-300`}
          >
            {validationMessage}
          </div>
        )}
      </div>
    );
  }

export default Input;


Input.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  ref: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  validationMessage: PropTypes.number.isRequired,
};