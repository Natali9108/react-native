import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import BgImage from "./img/bgImg.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar currentHeight={44} />
      <View accessibilityIgnoresInvertColors={true} style={styles.container}>
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
