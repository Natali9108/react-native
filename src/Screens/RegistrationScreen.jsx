import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import UserImage from "../components/UserImage";
import TextComponent from "../components/Text";
import FormButton from "../components/FormButton";
import { TextInputField } from "../components/TextInputField/TextInputField";
import { registerUserSchema, useShowPassword } from "../helpers";
import BgImage from "../assets/img/bgImg.png";

const RegistrationScreen = () => {
  const { showPassword, togglePassword } = useShowPassword();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerUserSchema) });

  const onSubmit = ({ name, email, password }) => {
    console.log({ name: name, email: email, password: password });
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-150}
        style={styles.container}
      >
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.inputContainer}>
            <UserImage />
            <Text style={styles.title}>Реєстрація</Text>

            <View>
              <TextInputField
                name="name"
                control={control}
                maxLength={16}
                placeholder="Логін"
                placeholderTextColor="#bdbdbd"
                keyboardAppearance="light"
              />
              <TextComponent
                text={errors.name?.message}
                color="#ff0000"
              ></TextComponent>
              <TextInputField
                name="email"
                control={control}
                maxLength={30}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#bdbdbd"
                keyboardAppearance="light"
                keyboardType="email-address"
              />
              <TextComponent
                text={errors.email?.message}
                color="#ff0000"
              ></TextComponent>
              <View>
                <TextInputField
                  name="password"
                  control={control}
                  placeholder="Пароль"
                  placeholderTextColor="#bdbdbd"
                  secureTextEntry={showPassword}
                  keyboardAppearance="light"
                />
                <TextComponent
                  text={errors.password?.message}
                  color="#ff0000"
                ></TextComponent>
                <TouchableOpacity
                  onPress={togglePassword}
                  style={styles.showPasswordWrapper}
                >
                  <Text style={styles.textShowPassword}>
                    {showPassword ? "Показати" : "Приховати"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <FormButton
              text="Зареєструватися"
              onPress={handleSubmit(onSubmit)}
            />
            <TouchableOpacity style={styles.checkAccountWrapper}>
              <TextComponent text={"Вже є акаунт? Увійти"} color="#1b4371" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
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
  showPasswordWrapper: { position: "absolute", top: 22, right: 16 },
  textShowPassword: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1b4371",
    textAlign: "right",
  },
  checkAccountWrapper: { marginBottom: 45 },
});
