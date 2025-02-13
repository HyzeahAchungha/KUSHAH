import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SuccessfulPayment({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      {/* Image */}
      <View style={{ alignItems: "center", marginBottom: 50 }}>
        <Image source={require("../../../assets/images/success.png")} />
      </View>

      {/* Text Content */}
      <Text style={styles.text}>Payment Successful!!</Text>

      <Text style={styles.thanksText}>
        Thank you for your Subscription. This will go a long way to support our
        Community.
      </Text>

      {/* Button at the Bottom */}
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Successful")}
        >
          <Text style={styles.Textbutton}>Back to Questions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#269C5F",
    elevation: 4,
  },
  title: {
    color: "#ffff",
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  thanksText: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 10,
    marginBottom: 30,
    color: "#888788",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 40,
  },
  Textbutton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
