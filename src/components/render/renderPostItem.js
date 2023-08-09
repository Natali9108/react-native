import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import TextComponent from "../Text";

const renderPostItem = ({ item, navigation }) => {
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
          <TextComponent text={item.comment} color="#bdbdbd" />
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

export default renderPostItem;

const styles = StyleSheet.create({
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
