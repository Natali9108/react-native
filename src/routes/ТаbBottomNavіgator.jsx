import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const TabBottomNavigator = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
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
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0px -0.5px 0px 0px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(13.591408729553223px)",
          height: 70,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "PostsScreen":
              (iconName = "grid"), (size = 24);
              break;
            case "CreatePostsScreen":
              (iconName = "plus"), (size = 24);
              break;
            case "ProfileScreen":
              (iconName = "user"), (size = 24);
              break;
          }
          return (
            <View
              style={[
                styles.iconContainer,
                focused ? { backgroundColor: "#ff6c00" } : null,
              ]}
            >
              <Feather name={iconName} size={size} color={color} />
            </View>
          );
        },

        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#212121cc",
      })}
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
          tabBarStyle: { display: "none" },
          unmountOnBlur: true,
        })}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default TabBottomNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "transparent",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
