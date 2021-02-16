import React, { useState, useEffect } from "react";

const useForm = (initialFieldValues, validate) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //[name] access the property "name"
    const fieldValue = { [name]: value };

    setValues({
      ...values,
      ...fieldValue,
      // [name]: value,
    });

    validate(fieldValue);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
};

export default useForm;
