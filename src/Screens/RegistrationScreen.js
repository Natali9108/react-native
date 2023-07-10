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

export const RegistrationScreen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

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
    <>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            {photo ? (
              <View>
                <Image source={{ uri: photo }} style={styles.userImage} />
                <Image
                  source={require("../img/deleteIcon.png")}
                  style={styles.userIcon}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require("../img/userPhotoPlacholder.jpg")}
                  style={styles.userImage}
                />
                <Image
                  source={require("../img/addIcon.png")}
                  style={styles.userIcon}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
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
              <Text style={styles.checkAccountText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingTop: 92,
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
