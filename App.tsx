import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoute from './src/navigation';


export default function App() {
  return (
    <NavigationContainer>
      <NavigationRoute />
    </NavigationContainer>
  );
}
