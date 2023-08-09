import { StyleSheet, TouchableOpacity, Pressable } from "react-native";
import TextComponent from "./Text";

const FormButton = ({ onPress, text, disabled, backgroundColor, color }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.btnContainer, { backgroundColor: backgroundColor }]}
    >
      <TextComponent text={text} color={color} />
    </Pressable>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 19,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,
  },
});
