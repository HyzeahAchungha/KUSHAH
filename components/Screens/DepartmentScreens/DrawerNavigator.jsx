import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../HomeScreen/HomeScreen";
import AskKushahAiScreen from "../AskKushahAiScreen/AskKushahAiScreen";
import AboutUsScreen from "../AboutUsScreen/AboutUsScreen";
import PrivacyPolicyScreen from "../PrivacyPolicyScreen/PrivacyPolicyScreen";
import CustomDrawer from "./CustomDrawer";
import FeedBackScreen from "../FeedBack/FeedBackScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="AskKushahAI" component={AskKushahAiScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Drawer.Screen name="Feedback" component={FeedBackScreen} />
    </Drawer.Navigator> 
  );
};

export default DrawerNavigator;

