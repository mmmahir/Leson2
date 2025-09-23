import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen"
import SecondaryScreen from './screens/SecondaryScreen';
import ExercizeScreen from './screens/ExercizeScreen';
import ExercizeScreen2 from './screens/ExercizeScreen2';
import Quote from './screens/Quote';
const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Quote}></Stack.Screen>
        <Stack.Screen name="Secondary" component={SecondaryScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
