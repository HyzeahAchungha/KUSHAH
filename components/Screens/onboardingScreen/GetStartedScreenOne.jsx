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
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/kushah.png")}
          style={styles.logo}
        />
        <Text style={styles.title}> KUSHAH</Text>
        <Text style={styles.body}>
          {" "}
          Your one best friend and easiest way to success
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="#FFFFFF"
            style={styles.icon}
          />
        </TouchableOpacity>

        <Image
          source={require("../../../assets/images/splash.png")}
          style={styles.get}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1B6F43",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  body: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 28,
    color: "#FFFFFF",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#269C5F",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#C8C8C8",
  },
  icon: {
    marginLeft: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
