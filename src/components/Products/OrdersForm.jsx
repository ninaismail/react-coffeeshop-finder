import { useRef, useState } from "react"
import PrimaryButton from "../UI/Elements/PrimaryButton"
import SecondaryButton from "../UI/Elements/SecondaryButton"

function OrdersForm() {
    const initialData  = {
      data: {
        Name: {
          value: "",
          ref: useRef(),
        },
        Email: {
          value: "",
          ref: useRef(),
        },
        Address: {
          value: "",
          ref: useRef(),
        }
      }
    };
    const [formData, setFormData] = useState(initialData)
    const [emailValidationMessage, setEmailValidationMessage] = useState()

    const handleInputChange = (e, fieldName) => {
      setFormData({
        data: {
          ...formData.data,
          [fieldName]: {
            value: e.target.value,
            ref: formData.data[fieldName].ref,
          },
        }
      });
    };
    const onSubmit = async (e) => {
      e.preventDefault();
      const data = {};
      for (const key in formData.data) {
        data[key] = formData.data[key].value;
      }
      console.log(data)

      if (!data.Email.includes('@')) {
          setEmailValidationMessage("The email should include a '@'")
      } else {
        const axios = (await import("axios")).default;
        await axios.post('https://react-refresher-e0f10-default-rtdb.firebaseio.com/submissions.json', data) 
        .then(function (response) {
          console.log('success',response)
        }).catch((error) => {
          console.log(error)
        })        
      }
    }
    const clearInputs = () => {
      setFormData(initialData)
      setEmailValidationMessage()
    }

    return (
    <form className="w-full p-4 mx-auto md:w-1/3" onSubmit={onSubmit}>
        <label htmlFor="Name">Name:</label>
        <input 
          id="Name"
          name="Name"
          type="text"
          ref={formData.data.Name.ref}
          value={formData.data.Name.value}
          onChange={(e)=>handleInputChange(e,e.target.name)}
          placeholder="Name"
          required
          className="w-full px-4 my-2 text-gray-600 border-2 border-gray-200 rounded-lg outline-none h-14 placeholder:text-gray-400 placeholder:text-sm hover:border-blue-700"
          />
        <label htmlFor="Email">Email:</label>
        <input 
            id="Email"
            type="text"          
            name="Email"
            ref={formData.data.Email.ref}
            value={formData.data.Email.value}
            onChange={(e)=>handleInputChange(e,e.target.name)}
            placeholder="Email"
            required
            className="w-full px-4 mt-2 text-gray-600 border-2 border-gray-200 rounded-lg outline-none h-14 placeholder:text-gray-400 placeholder:text-sm hover:border-blue-700"
            />  
        <p className="mb-2 text-[12px] text-red-500">{emailValidationMessage}</p>
        <label htmlFor="Address">Address:</label>
        <input
            id="Address"
            type="text"
            name="Address"
            ref={formData.data.Address.ref}
            value={formData.data.Address.value}
            onChange={(e)=>handleInputChange(e,e.target.name)}
            placeholder="Address"
            required
            className="w-full px-4 my-2 text-gray-600 border-2 border-gray-200 rounded-lg outline-none h-14 placeholder:text-gray-400 placeholder:text-sm hover:border-blue-700"
        /> 
        <div className="flex items-center justify-end gap-2">
            <PrimaryButton label="Order"/>
            <SecondaryButton onClick={clearInputs} label="Cancel"/>
        </div>       
    </form> 
    )
}
  
export default OrdersForm