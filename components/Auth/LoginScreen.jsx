import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import React,{useState} from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };




  return (

    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={require("../../assets/images/password.png")}
        style={styles.image}
      />

<View style={styles.signupContainer}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Enter account email address</Text>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={[
            styles.input,
            { borderColor: isEmailValid || email === "" ? "#CCCCCC" : "red" },
          ]}
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          placeholder="Enter your email"
        />

        <Text style={styles.resendText}>
          Email address is not registered?{" "}
          <Text style={styles.resendLink}>Sign Up</Text>
        </Text>

        <TouchableOpacity
          style={[
            styles.verifyButton,
            { backgroundColor: isEmailValid ? "#1B6F43" : "#CCCCCC" },
          ]}
          disabled={!isEmailValid}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.verifyButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    padding: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
   signupContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  resendText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 20,
  },
  resendLink: {
    color: "#1B6F43",
    fontWeight: "bold",
  },
  verifyButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
