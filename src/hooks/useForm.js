import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setValues(defaultValues);

  return { values, setValues, handleChange, handleReset };
}
