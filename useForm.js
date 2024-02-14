import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    inputChange,
    onResetForm,
  };
};

export default useForm;
/**{
    username: "",
    email: "",
    password: "",
  } */
