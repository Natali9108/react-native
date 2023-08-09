import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import TextComponent from "../Text";
import { StyleSheet } from "react-native";

const renderProfileItem = ({ item, navigation }) => {
  return (
    <View style={styles.postsListContainer}>
      <Image source={item.image} style={styles.postImage} />
      <Text style={styles.imageName}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsWrapper}>
          <TouchableOpacity
            style={[styles.detailsWrapper, { marginRight: 24 }]}
          >
            <Feather
              name="message-circle"
              size={24}
              color="#ff6c00"
              onPress={() =>
                navigation.navigate("CommentsScreen", {
                  image: item.image,
                })
              }
            />
            <TextComponent text={item.comment} color="#212121" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailsWrapper}>
            <Feather name="thumbs-up" size={24} color="#ff6c00" />
            <TextComponent text={item.like} color="#212121" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.detailsWrapper}>
          <Feather name="map-pin" size={24} color="#bdbdbd" />
          <TextComponent
            text="Ukraine"
            color="#212121"
            textDecorationLine="underline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default renderProfileItem;

const styles = StyleSheet.create({
  postsListContainer: {
    width: "97%",
    marginBottom: 32,
  },
  postImage: {
    marginBottom: 8,
    width: "100%",
    height: 240,
    borderRadius: 8,
    resizeMode: "cover",
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
    alignItems: "center",
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
