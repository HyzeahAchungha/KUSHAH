import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
export default function OtpScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={require("../../assets/images/Frame.png")}
        style={styles.image}
      />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter verification code sent to your{" "}
        <Text style={styles.email}>fonbrice680@gmail.com</Text>
      </Text>
      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn't receive the OTP code?
          <Text style={styles.resendLink}>Resend Code</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.verifyButtonText}>Verify & Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
    marginBottom: 30,
  },
  email: {
    fontWeight: "bold",
    color: "#000000",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  otpInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 5,
  },
  resendText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 20,
    textAlign: "center",
  },
  resendLink: {
    color: "#1B6F43",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  verifyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#269C5F",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 20,
    marginBottom: 15,
    justifyContent: "center",
    width: "100%",
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
