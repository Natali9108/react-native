import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const UserImage = () => {
  const [photo, setPhoto] = useState(null);

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity>
        {photo ? (
          <View>
            <Image source={{ uri: photo }} style={styles.userImage} />
            <AntDesign
              name="closecircleo"
              size={25}
              color="#e8e8e8"
              style={styles.userIcon}
            />
          </View>
        ) : (
          <View>
            <Image
              source={require("../assets/img/userPhotoPlacholder.jpg")}
              style={styles.userImage}
            />
            <Ionicons
              name="ios-add-circle-outline"
              size={25}
              color="#ff6c00"
              style={styles.userIcon}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UserImage;

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    left: "50%",
    top: 0,
    marginLeft: -50,
    marginTop: -50,
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  userIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -11,
  },
});
