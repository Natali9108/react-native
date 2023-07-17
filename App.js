import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import BgImage from "./src/assets/img/bgImg.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        accessibilityIgnoresInvertColors={true}
        style={styles.safeAreaContainer}
      >
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
        <StatusBar currentHeight={44} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, justifyContent: "flex-end" },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
