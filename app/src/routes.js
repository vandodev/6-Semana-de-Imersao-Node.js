import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {NavigationContainer} from '@react-navigation/native';
import Orcamento from '../src/pages/Orcamento';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Orcamento" component={Orcamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
