import { View, Image, StyleSheet, Text, FlatList } from "react-native";

import renderPostItem from "../components/render/renderPostItem";
import { postsData } from "../data";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={require("../assets/img/userAvatar.png")}
          style={styles.userImage}
        />
        <View style={styles.userTextWrapper}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={postsData}
        renderItem={({ item }) => renderPostItem({ item, navigation })}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  imageBox: { marginBottom: 32, flexDirection: "row", alignItems: "center" },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    resizeMode: "cover",
  },
  userTextWrapper: { marginLeft: 8, flexDirection: "column" },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontWeight: 700,
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
    fontWeight: 400,
  },
});
