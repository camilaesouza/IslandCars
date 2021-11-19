import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Island Cars" component={Home} />
          <Stack.Screen name="Sobre" component={About} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}