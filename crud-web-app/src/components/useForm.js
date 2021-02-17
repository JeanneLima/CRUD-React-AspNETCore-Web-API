import React, { useState, useEffect } from "react";

const useForm = (initialFieldValues, validate, setCurrentId) => {
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

  const resetForm = () => {
    setValues({
      ...initialFieldValues,
    });
    setErrors({});
    setCurrentId(0);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};

export default useForm;
