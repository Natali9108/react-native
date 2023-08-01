import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Home = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarLabel: () => null,
        headerTintColor: "#212121",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: 500,
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.41,
        },
        headerStyle: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.3)",
        },
        headerRightContainerStyle: {
          paddingHorizontal: 16,
        },
        headerLeftContainerStyle: {
          paddingHorizontal: 16,
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#bdbdbd"
              onPress={() => navigation.navigate("Login")}
            />
          ),

          tabBarIcon: () => <Feather name="grid" size={24} color="#212121cc" />,
        })}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#212121cc"
              onPress={() => navigation.navigate("PostsScreen")}
            />
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.iconContainerFocused}>
                <Feather name="trash-2" size={15} color="#bdbdbd" />
              </View>
            ) : (
              <View style={styles.iconContainer}>
                <Feather name="plus" size={15} color="#ffffff" />
              </View>
            ),
        })}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#212121cc" />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px -0.5px 0px 0px rgba(0, 0, 0, 0.3)",
  },
  iconContainer: {
    backgroundColor: "#ff6c00",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainerFocused: {
    backgroundColor: "#f6f6f6",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
