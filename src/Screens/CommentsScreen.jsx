import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useForm } from "react-hook-form";

import { TextInputField } from "../components/TextInputField";
import { Ionicons } from "@expo/vector-icons";
import renderCommentItem from "../components/render/renderCommentItem";
import { commentsData } from "../data";

const CommentsScreen = ({ route }) => {
  const { image } = route.params;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={commentsData}
          renderItem={({ item }) => renderCommentItem({ item })}
          keyExtractor={(item) => item.id}
          // contentContainerStyle={styles.flatListContent}
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
});
