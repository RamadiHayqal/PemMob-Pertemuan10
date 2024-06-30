import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsList from './components/FriendList';
import FriendDetail from './components/FriendDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Friends List" component={FriendsList} />
        <Stack.Screen name="Friend Detail" component={FriendDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
