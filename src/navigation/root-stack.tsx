import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';

export const Stack = createNativeStackNavigator();

function RootStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={Home}
          name="HomeStack"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
