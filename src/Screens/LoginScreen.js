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
  const [isFocused, setIsFocused] = useState(null);

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

  const handleFocus = (inputName) => {
    setIsFocused(inputName);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.title]}>Увійти</Text>

      <TextInput
        name="email"
        autoFocus={true}
        maxLength={16}
        placeholder="Адреса електронної пошти"
        placeholderTextColor="#bdbdbd"
        keyboardAppearance="light"
        keyboardType="email-address"
        onFocus={() => handleFocus("email")}
        onBlur={() => handleFocus(null)}
        style={[
          styles.textInput,
          isFocused === "email" ? styles.textInputFocus : null,
        ]}
      />

      <View>
        <TextInput
          name="password"
          maxLength={16}
          placeholder="Пароль"
          placeholderTextColor="#bdbdbd"
          secureTextEntry={true}
          keyboardAppearance="light"
          onFocus={() => handleFocus("password")}
          onBlur={() => handleFocus(null)}
          style={[
            styles.textInput,
            isFocused === "email" ? styles.textInputFocus : null,
          ]}
        />
        <TouchableOpacity style={styles.showPasswordWrapper}>
          <Text style={styles.textShowPassword}>Показати</Text>
        </TouchableOpacity>
      </View>

      {!isKeyboardOpen && (
        <>
          <TouchableOpacity style={styles.registerBtnWrapper}>
            <Text style={styles.registerBtnText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.checkAccountWrapper}>
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
    paddingHorizontal: 16,
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

  textInput: {
    padding: 16,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
  },
  textInputFocus: {
    borderColor: "#ff6c00",
    backgroundColor: "#fff",
  },
  showPasswordWrapper: { position: "absolute", top: 22, right: 16 },
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
  checkAccountWrapper: { marginBottom: 45 },
  checkAccountText: {
    paddingBottom: 111,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1b4371",
  },
});
