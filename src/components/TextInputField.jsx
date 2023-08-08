import { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";

export const TextInputField = ({ name, control, ...rest }) => {
  const [isFocused, setIsFocused] = useState(null);

  const handleFocus = (inputName) => {
    setIsFocused(inputName);
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              styles.input,
              isFocused === name ? styles.inputFocus : null,
            ]}
            onChangeText={onChange}
            onFocus={() => handleFocus(name)}
            onBlur={() => handleFocus(null)}
            value={value}
            {...rest}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  inputFocus: {
    borderColor: "#ff6c00",
    backgroundColor: "#fff",
  },
});
