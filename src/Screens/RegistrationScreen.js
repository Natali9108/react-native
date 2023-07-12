import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
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
    <>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            {photo ? (
              <View>
                <Image source={{ uri: photo }} style={styles.userImage} />
                <AntDesign
                  name="closecircleo"
                  size={25}
                  color="#e8e8e8"
                  style={styles.userIcon}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require("../../img/userPhotoPlacholder.jpg")}
                  style={styles.userImage}
                />
                <Ionicons
                  name="ios-add-circle-outline"
                  size={25}
                  color="#ff6c00"
                  style={styles.userIcon}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>

        <TextInput
          name="name"
          autoFocus={true}
          maxLength={16}
          placeholder="Логін"
          placeholderTextColor="#bdbdbd"
          keyboardAppearance="light"
          onFocus={() => handleFocus("name")}
          onBlur={() => handleFocus(null)}
          style={[
            styles.textInput,
            isFocused === "name" ? styles.textInputFocus : null,
          ]}
        />

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
              isFocused === "password" ? styles.textInputFocus : null,
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
              <Text style={styles.checkAccountText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingTop: 92,
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
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
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
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1b4371",
  },
  imageContainer: {
    position: "absolute",
    left: "50%",
    top: 0,
    marginLeft: -50,
    marginTop: -50,
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  userIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -11,
  },
});
