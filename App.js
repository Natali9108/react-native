import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import MainNavigator from "./src/routes/MainNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "rb-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "rb-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return <MainNavigator />;
}
