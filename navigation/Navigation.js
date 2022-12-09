import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Email from '../components/SvgIcons/Email';
import HomeIcon from '../components/SvgIcons/HomeIcon';
import Person from '../components/SvgIcons/Person';
import Star from '../components/SvgIcons/Star';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Ranking from '../screens/Ranking';

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
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        title: 'Home',
        headerShown: false,
        tabBarLabelPosition:'below-icon',
        tabBarIcon: ({size,focused,color}) => {
          return (
          <HomeIcon/>
          );
        },
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          title: 'Profil',
          headerShown: false,
          tabBarIcon: ({size,focused,color}) => {
            return (
<Person/>
            );
          },
        }}
       />
      <Tab.Screen name="Ranking" component={Ranking} 
        options={{
          title: 'Ranking',
          headerShown: false,
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Star/>
            );
          },
        }}
      />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          title: 'Powiadomienia',
          headerShown: false,
          tabBarIcon: ({size,focused,color}) => {
            return (
<Email/>
            );
          },
        }} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}