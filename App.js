import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import ConfigureStore from './src/components/Store';
import Login from './src/views/Login';
import Products from './src/views/Products';
import Detail from './src/views/Detail';
import Cart from './src/views/Cart';

const Stack = createNativeStackNavigator();
const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}