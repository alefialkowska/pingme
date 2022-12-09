import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Ranking from "../screens/Ranking";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Ranking" component={Ranking} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="Notification" component={Notification} />
      {/* <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
