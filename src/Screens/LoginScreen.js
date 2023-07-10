import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./RegistrationScreen";
import { useEffect, useState } from "react";

export const LoginScreen = () => {
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
    <View style={[styles.inputContainer, { paddingTop: 32 }]}>
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
            <Text style={[styles.checkAccountText, { paddingBottom: 111 }]}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
