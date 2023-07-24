import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from './src/pages/Task';
import NewTask from './src/pages/newTask';


const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Taske"
          component={Task}
          options={{
            headerTintColor: "#F49"
          }}
        />

        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#F49"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

