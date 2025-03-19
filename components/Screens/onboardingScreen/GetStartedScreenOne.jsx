import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function GetStartedScreen() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor="#1B6F43" barStyle="light-content" />
      <View style={[styles.container, { backgroundColor: "#1B6F43" }]}>
        <Image
          source={require("../../../assets/images/kushah.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>KUSHAH</Text>
        <Text style={styles.subtitle}>
          Your one best friend and easiest way to success
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
        <Image
          source={require("../../../assets/images/splash.png")}
          style={styles.onboardingImage}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center",
    padding: 20,
    paddingBottom: 100, 
  },
  content: {
    zIndex: 1, 
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 28,
    color: "#FFFFFF",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#269C5F",
    padding: 15,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  onboardingImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: 0,
    marginLeft: 0,
    resizeMode: "contain",
  },
});
