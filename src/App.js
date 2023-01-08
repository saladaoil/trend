import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactForm from './ContactForm';
import Complete from './Complete';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="お問合せフォーム"
            component={ContactForm}
          />
          <Stack.Screen
            name="送信完了しました"
            component={Complete}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;