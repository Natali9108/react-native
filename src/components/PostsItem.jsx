import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PostsItem = ({ item, onPress }) => {
  //   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.imageName}>{item.title}</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.imageBar}>
          <Feather
            name="message-circle"
            size={24}
            color="#bdbdbd"
            onPress={onPress}
          />
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageBar}>
          <Feather name="map-pin" size={24} color="#bdbdbd" />
          <Text>Ivano-Frankivs'k Region, Ukraine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostsItem;

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
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
