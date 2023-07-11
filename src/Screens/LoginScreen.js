import { useEffect, useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.title]}>Увійти</Text>
      <View style={styles.inputBox}>
        <TextInput
          autoFocus={true}
          maxLength={16}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#bdbdbd"
          keyboardAppearance="light"
          keyboardType="email-address"
          style={styles.textInput}
        />
      </View>

      <View
        style={[
          styles.inputBox,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 43,
            paddingRight: 16,
          },
        ]}
      >
        <TextInput
          maxLength={16}
          placeholder="Пароль"
          placeholderTextColor="#bdbdbd"
          secureTextEntry={true}
          keyboardAppearance="light"
          style={styles.textInput}
        />
        <TouchableOpacity>
          <Text style={styles.textShowPassword}>Показати</Text>
        </TouchableOpacity>
      </View>

      {!isKeyboardOpen && (
        <>
          <TouchableOpacity style={styles.registerBtnWrapper}>
            <Text style={styles.registerBtnText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginBottom: 45 }}>
            <Text style={styles.checkAccountText}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
  },
  title: {
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    textAlign: "center",
    color: "#212121",
  },
  inputBox: {
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
  },
  textInput: {
    padding: 16,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  textShowPassword: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1b4371",
    textAlign: "right",
  },
  registerBtnWrapper: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
  registerBtnText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#ffffff",
  },
  checkAccountText: {
    paddingBottom: 111,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1b4371",
  },
});
