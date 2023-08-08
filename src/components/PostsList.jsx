import { FlatList } from "react-native";
import PostsItem from "./PostsItem";
import { useNavigation } from "@react-navigation/native";

const PostsList = ({ data }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => PostsItem({ item, navigation })}
      onPress={() =>
        navigation.navigate("CommentsScreen", {
          screen: "CommentsScreen",
          params: { item: item.id },
        })
      }
      keyExtractor={(item) => item.id}
    />
  );
};

export default PostsList;
