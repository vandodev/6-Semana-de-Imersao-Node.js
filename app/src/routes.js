import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {NavigationContainer} from '@react-navigation/native';
import Orcamento from '../src/pages/Orcamento';

export default function Routes() {
  
  const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#050c3d'
    },
    headerTintColor: '#00a1fc',
    headerBackTitle: 'Voltar'
}

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen 
                    name="Orcamento" 
                    component={Orcamento}
                    options={{
                        headerTitle: "Orçamento"
                    }} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}
