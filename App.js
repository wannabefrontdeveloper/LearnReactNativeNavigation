import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return <Text>Home</Text>;
}
function SearchScreen({navigation}) {
  return <Text>Search</Text>;
}
function NotificationScreen({navigation}) {
  return <Text>Notification</Text>;
}
function MessageScreen({navigation}) {
  return <Text>Message</Text>;
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
