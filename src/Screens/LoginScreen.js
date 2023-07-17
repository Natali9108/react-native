import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormButton from "../components/FormButton";
import TextComponent from "../components/Text";
import { TextInputField } from "../components/TextInputField/TextInputField";
import { loginUserSchema, useShowPassword } from "../helpers";

const LoginScreen = () => {
  const { showPassword, togglePassword } = useShowPassword();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginUserSchema) });

  const onSubmit = ({ email, password }) => {
    console.log({ email: email, password: password });
    reset();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.inputContainer}>
        <Text style={[styles.title]}>Увійти</Text>

        <View>
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
          onPress={handleSubmit(onSubmit)}
          text="Увійти"
          color="#fffff"
        />
        <TouchableOpacity style={styles.checkAccountWrapper}>
          <TextComponent
            text="Немає акаунту? Зареєструватися"
            color="#1b4371"
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 500,
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
  showPasswordWrapper: { position: "absolute", top: 22, right: 16 },
  textShowPassword: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1b4371",
    textAlign: "right",
  },
  checkAccountWrapper: { marginBottom: 45 },
});
