import { StyleSheet, TouchableOpacity } from "react-native";
import TextComponent from "./Text";

const FormButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <TextComponent text={text} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
});
