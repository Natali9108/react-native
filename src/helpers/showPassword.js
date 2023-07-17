import { useState } from "react";

export const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => setShowPassword((showPassword) => !showPassword);

  return { showPassword, togglePassword };
};
