import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesome5, Feather } from "@expo/vector-icons";

import { TextInputField } from "../components/TextInputField";
import FormButton from "../components/FormButton";
import { photoParamsSchema } from "../helpers";

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched", resolver: yupResolver(photoParamsSchema) });

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraThumb}>
          <FontAwesome5 name="camera" size={24} color="#bdbdbd" />
        </TouchableOpacity>
      </View>
      <Text style={styles.downloadPhoto}>
        {photo ? "Редагувати фото" : "Завантажте фото"}
      </Text>

      <TextInputField
        name="name"
        control={control}
        placeholder="Назва..."
        placeholderTextColor="#bdbdbd"
        style={styles.input}
      />
      <View style={styles.locationInputContainer}>
        <Feather
          name="map-pin"
          size={24}
          color="#bdbdbd"
          style={styles.locationIcon}
        />
        <TextInputField
          name="location"
          control={control}
          placeholder="Місцевість..."
          placeholderTextColor="#bdbdbd"
          style={[styles.input, { width: "100%", paddingLeft: 28 }]}
        />
      </View>

      <FormButton
        text="Опубліковати"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        backgroundColor={!isValid ? "#f6f6f6" : "#ff6c00"}
        color={!isValid ? "#bdbdbd" : "#fff"}
      />
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.trashIconContainer}>
          <Feather name="trash-2" size={24} color="#bdbdbd" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  cameraContainer: {
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
  },
  cameraThumb: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  downloadPhoto: {
    marginBottom: 32,
    color: "#bdbdbd",
    fontSize: 16,
    fontWeight: 400,
  },
  input: {
    paddingVertical: 16,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#e8e8e8",
    color: "#212121",
    fontSize: 16,
  },
  locationIcon: {
    position: "absolute",
    bottom: 18,
    left: 0,
  },
  locationInputContainer: {
    marginTop: 16,
    marginBottom: 32,
  },
  tabBar: {
    marginTop: 90,
    paddingTop: 9,
    paddingBottom: 34,
    flex: 1,
    maxHeight: 83,
    justifyContent: "flex-end",
    flexDirection: "column",
    textAlign: "center",
    boxShadow: "0px -0.5px 0px 0px #0000004d",
  },
  trashIconContainer: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#f6f6f6",
  },
});
