import { StyleSheet, View, ScrollView, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStartedScreenOne from "../components/Screens/onboardingScreen/GetStartedScreenOne";
import SignupScreen from "../components/Auth/SignupScreen";
import LoginScreen from "../components/Auth/LoginScreen";
import OtpScreen from "../components/Auth/OtpScreen";
import HomeScreen from "../components/Screens/HomeScreen/HomeScreen";
import DrawerNavigator from "../components/Screens/DepartmentScreens/DrawerNavigator";
import DepartmentScreen from "../components/Screens/DepartmentScreen";
import CourseScreen from "../components/Screens/CourseScreen";
import QuestionScreen from "../components/Screens/QuestionScreen";
import { NavigationContainer } from "@react-navigation/native";
import PaymentScreen from "../components/Screens/Payment/PaymentScreen";
import SuccessfulPayment from "../components/Screens/Payment/SuccessfulPayment";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

   
    
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name="Started" component={GetStartedScreenOne} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="otp" component={OtpScreen} />
      <Stack.Screen name="home" component={DrawerNavigator} />
      <Stack.Screen name="Departments" component={DepartmentScreen} />
      <Stack.Screen name="Courses" component={CourseScreen} />
      <Stack.Screen name="Questions" component={QuestionScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen}/>
       <Stack.Screen name="Successful" component={SuccessfulPayment} />
    </Stack.Navigator>


  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
