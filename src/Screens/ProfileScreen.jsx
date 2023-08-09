import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import UserImage from "../components/UserImage";
import BgImage from "../assets/img/bgImg.png";
import renderProfileItem from "../components/render/renderProfileItem";
import { profileData } from "../data";

const ProfileScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={BgImage}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <UserImage />

        <Feather
          name="log-out"
          size={24}
          color="#bdbdbd"
          onPress={() => navigation.navigate("Login")}
          style={styles.logoutIcon}
        />
        <Text style={styles.title}>Natali Romanova</Text>
        <FlatList
          data={profileData}
          renderItem={({ item }) => renderProfileItem({ item, navigation })}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    maxHeight: "80%",
    paddingHorizontal: 16,
    width: "100%",
    paddingTop: 22,
    paddingHorizontal: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
  },
  logoutIcon: {
    alignSelf: "flex-end",
  },
  title: {
    marginVertical: 32,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
});
