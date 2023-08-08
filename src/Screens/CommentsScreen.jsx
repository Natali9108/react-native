import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { TextInputField } from "../components/TextInputField";
import { Ionicons } from "@expo/vector-icons";
import { formatCurrentDate } from "../helpers";
import image1 from "../assets/img/userAvatar.png";
import image2 from "../assets/img/userAvatar_.png";

const data = [
  {
    id: "1",
    image: image1,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    id: "2",
    image: image2,
    title:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
  },
  {
    id: "3",
    image: image1,
    title: "Thank you! That was very helpful!",
  },
  {
    id: "5",
    image: image1,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    id: "6",
    image: image1,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    id: "7",
    image: image1,
    title:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
];
const renderItem = ({ item, navigation }) => {
  return (
    <View style={styles.commentItem}>
      <Image source={item.image} style={styles.userAvatar} />
      <View style={styles.commentWrapper}>
        <Text style={styles.commentText}>{item.title}</Text>
        <Text style={styles.date}>{formatCurrentDate()}</Text>
      </View>
    </View>
  );
};

const CommentsScreen = ({ route, navigation }) => {
  const { image } = route.params;
  const [comments, setComments] = useState([]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ comment }) => {
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const newComment = {
      id: uniqueId,
      image: image1,
      title: comment,
    };
    setComments((state) => [...state, newComment]);

    reset();
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={comments}
          renderItem={({ item }) => renderItem({ item })}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </SafeAreaView>

      <View style={styles.inputContainer}>
        <TextInputField
          name="comment"
          control={control}
          placeholder="Коментувати..."
          inputMode="text"
          multiline={true}
          textAlignVertical="top"
          style={styles.input}
        />
        <TouchableOpacity style={styles.upIcon}>
          <Ionicons
            name="arrow-up-circle"
            size={50}
            color="#ff6c00"
            onPress={handleSubmit(onSubmit)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 34,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  image: {
    marginBottom: 32,
    width: "100%",
    height: 240,
    borderRadius: 8,
    resizeMode: "cover",
  },
  inputContainer: {
    flexDirection: "row",
    // paddingTop: 4,
    width: "100%",
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    borderRadius: 100,
  },
  input: {
    width: "85%",
    flexDirection: "row",
    padding: 16,
    borderWidth: 0,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    borderRadius: 100,
    fontSize: 16,
  },
  upIcon: {
    flexDirection: "row",
    width: "15%",
    alignItems: "center",
  },

  flatListContent: {
    // marginRight: 16,
    // paddingHorizontal: 16,
  },
  userAvatar: {
    height: 28,
    width: 28,
    borderRadius: 50,
  },
  commentItem: {
    flexDirection: "row",
    gap: 32,
    marginBottom: 24,
  },

  commentWrapper: {
    padding: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 299,
  },
  commentText: {
    marginBottom: 6,
    color: "#212121",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18,
    flexShrink: 0,
  },
  date: {
    color: "#BDBDBD",
    textAlign: "right",
    fontSize: 10,
    fontWeight: 400,
  },
});
