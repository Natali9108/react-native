import { StyleSheet, Text } from "react-native";

const TextComponent = ({ text, color, ...otherProps }) => {
  return (
    <Text style={[styles.text, { color: color, ...otherProps }]}>{text}</Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: "center",
  },
});
