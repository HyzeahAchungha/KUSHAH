import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header} onPress={()=>navigation.navigate("login")}>Skip</Text>
      <Image
        source={require("../../assets/images/pana.png")}
        style={styles.auth}
      />
      <Text style={styles.title}>EASY WAY TO SUCCESS</Text>

      <Text style={styles.subtitle}>
        Get fast access to past HND questions from all years
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("otp")}
      >
        <Text style={styles.buttonText}>Signup with Google</Text>
        <Image
        source={require("../../assets/images/Group.png")}
        style={styles.auth}
      />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.loginText}>Login</Text>

        <Image
        source={require("../../assets/images/Group.png")}
        style={styles.auth}
      />
      </TouchableOpacity>

      <Text style={styles.policy}>
        By signing up to <Text style={styles.boldText}>Kushah</Text>, you agree with our{" "}
        <Text style={styles.boldText}>T&Cs</Text>, and our{" "}
        <Text style={styles.boldText}>Privacy policy</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",  
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 28,
    color: "#000",
    marginVertical: 20,
  },
  button: {
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
 
  buttonText: {
    color: "#FFFFFF",
    fontWeight: '600', 
    fontSize: 18,
    marginRight: 10,
  },
  login: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    justifyContent: "center",
    width: "100%",
  },
  loginText: {
    color: "#000",
    fontWeight: '600',
     fontSize: 18,
    marginRight: 10,
  },
  policy: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 18,
    color: "#000",
    marginBottom: 20,
    paddingHorizontal: 10,  
  },
  boldText: {
    fontWeight: "bold",
  },
  header: {
    alignSelf: "flex-end",
    marginTop: 20,
    color: "#269C5F",
    fontSize: 16,
    fontWeight: "bold",
  },
  
});
