import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen"
import SecondaryScreen from './screens/SecondaryScreen';
import ExercizeScreen from './screens/ExercizeScreen';
import ExercizeScreen2 from './screens/ExercizeScreen2';
import Quote from './screens/Quote';
import ListScreen from './screens/ListScreen';
import Student from './screens/student';
import buttons from './screens/buttons';
import QuizScreen from './screens/QuizScreen';
import MenuScreen from "./screens/MenuScreen";


const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Button" component={buttons}></Stack.Screen>
        <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
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
