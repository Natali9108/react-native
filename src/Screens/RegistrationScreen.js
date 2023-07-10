import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import BgImage from "../img/bgImg.png";
import { useEffect, useState } from "react";

export const RegistrationScreen = () => {
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
    <View accessibilityIgnoresInvertColors={true} style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputBox}>
            <TextInput
              autoFocus={true}
              maxLength={16}
              placeholder="Логін"
              placeholderTextColor="#bdbdbd"
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              autoFocus={true}
              maxLength={16}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#bdbdbd"
              style={styles.textInput}
            />
          </View>

          <View style={styles.inputBoxPassword}>
            <TextInput
              // autoFocus={true}
              maxLength={16}
              placeholder="Пароль"
              placeholderTextColor="#bdbdbd"
              secureTextEntry={true}
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
                  Вже є акаунт? Увійти
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    // padding: 219,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    // position: "relative",
    paddingTop: 92,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    textAlign: "center",
    color: "#212121",
  },
  inputBox: {
    // padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
  },
  inputBoxPassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 43,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
  },
  textInput: {
    padding: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
  },
  textShowPassword: {
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#ffffff",
  },
  checkAccountText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1b4371",
  },
});
