import {  StyleSheet, View, ScrollView, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreenOne from '../components/Screens/onboardingScreen/GetStartedScreenOne';
import SignupScreen from '../components/Auth/SignupScreen';
import LoginScreen from '../components/Auth/LoginScreen';
import OtpScreen from '../components/Auth/OtpScreen';
import HomeScreen from "../components/Screens/HomeScreen/HomeScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<Stack.Navigator screenOptions={{
  headerShown:false
}}>
      <Stack.Screen name="Started" component={GetStartedScreenOne} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="login" component={LoginScreen} /> 
       <Stack.Screen name="otp" component={OtpScreen} />
       <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
   
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
 
});
    