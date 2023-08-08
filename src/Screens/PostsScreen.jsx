import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import TextComponent from "../components/Text";
import image1 from "../assets/img/post-screen-example-1.png";
import image2 from "../assets/img/post-screen-example-2.png";
import image3 from "../assets/img/post-screen-example-3.jpg";
import image4 from "../assets/img/post-screen-example-4.jpg";

const data = [
  { id: "1", image: image1, title: "Ліс" },
  {
    id: "2",
    image: image2,
    title: "Закат на Черном море",
  },
  {
    id: "3",
    image: image3,
    title: "Облака",
  },
  {
    id: "4",
    image: image4,
    title: "Озеро",
  },
];

const renderItem = ({ item, navigation }) => {
  return (
    <View style={styles.postsListContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.imageName}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <TouchableOpacity style={styles.detailsWrapper}>
          <Feather
            name="message-circle"
            size={24}
            color="#bdbdbd"
            onPress={() =>
              navigation.navigate("CommentsScreen", {
                image: item.image,
              })
            }
          />
          <TextComponent text={0} color="#bdbdbd" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.detailsWrapper}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <Feather name="map-pin" size={24} color="#bdbdbd" />
          <TextComponent
            text="Ivano-Frankivsk Region Ukraine"
            color="#212121"
            textDecorationLine="underline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
        data={data}
        renderItem={({ item }) => renderItem({ item, navigation })}
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
  postsListContainer: {
    width: "97%",
    marginBottom: 34,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    marginBottom: 8,
    height: 240,
    flexShrink: 0,
    resizeMode: "cover",
    borderRadius: 8,
  },
  imageName: {
    marginBottom: 8,
    color: "#212121",
    fontSize: 16,
    fontWeight: 500,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
