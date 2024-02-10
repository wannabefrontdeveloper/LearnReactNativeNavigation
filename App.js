import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Notification') {
              iconName = 'notifications';
            } else if (route.name === 'Message') {
              iconName = 'message';
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#fb8c00',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{title: '검색'}}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{title: '알림'}}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{title: '메시지'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
