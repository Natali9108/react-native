import { Image, StyleSheet, Text, View } from "react-native";
import { formatCurrentDate } from "../../helpers";

const renderCommentItem = ({ item, navigation }) => {
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

export default renderCommentItem;

const styles = StyleSheet.create({
  commentItem: {
    flexDirection: "row",
    gap: 32,
    marginBottom: 24,
  },
  userAvatar: {
    height: 28,
    width: 28,
    borderRadius: 50,
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
