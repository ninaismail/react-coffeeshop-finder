import Input from "./UI/Elements/Input"
import PrimaryButton from "./UI/Elements/PrimaryButton"
import SecondaryButton from "./UI/Elements/SecondaryButton"

function PropertiesForm() {
    const handleInputChange = () => {
        // Input changed logic here
    }
    const clearInputs = () => {
        // Clear form logic here
    }
    const onSubmit = () => {
        // Form submit logic here
    }
    return (
    <form className="md:w-1/3 w-full mx-auto p-4" onSubmit={onSubmit}>
        <Input 
            label="Name"
            type="text"
            onChange={handleInputChange}
            placeholder="Name"
            required={true}
            validationMessage="Please fill up this field"        
            className="mb-2"        
        />
        <Input 
            label="Email"
            type="text"
            onChange={handleInputChange}
            placeholder="Email"
            required={true}
            validationMessage="Please fill up this field"
            className="mb-2"        
            />   
        <Input 
            label="Address"
            type="text"
            onChange={handleInputChange}
            placeholder="Address"
            required={true}
            validationMessage="Please fill up this field" 
            className="mb-2"       
        /> 
        <div className="flex justify-end items-center gap-2">
            <PrimaryButton label="Submit"/>
            <SecondaryButton onClick={clearInputs} label="Cancel"/>
        </div>       
    </form> 
    )
  }
  
  export default PropertiesForm