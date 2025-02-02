import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <input
        type="text"
        name="input1"
        value={formData.input1}
        onChange={handleChange}
        placeholder="Input 1"
      />
      <input
        type="text"
        name="input2"
        value={formData.input2}
        onChange={handleChange}
        placeholder="Input 2"
      />
      <input
        type="text"
        name="input3"
        value={formData.input3}
        onChange={handleChange}
        placeholder="Input 3"
      />
      <input
        type="text"
        name="input4"
        value={formData.input4}
        onChange={handleChange}
        placeholder="Input 4"
      />
      <input
        type="text"
        name="input5"
        value={formData.input5}
        onChange={handleChange}
        placeholder="Input 5"
      />
    </form>
  );
};

export default FormComponent;
