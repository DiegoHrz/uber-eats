import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';


export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator />

        <StatusBar style="auto" />
    </NavigationContainer>
  );
}






{/* props are are a way to send data from the parent component to the child component */}