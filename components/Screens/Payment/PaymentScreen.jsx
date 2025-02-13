import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

export default function PaymentScreen({ route, navigation }) {
  const [selectedPayment, setSelectedPayment] = useState("mtn");
  const [phoneNumber, setPhoneNumber] = useState("");

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

      {/* Payment Methods */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Payment Methods
      </Text>

      {/* MTN Option */}
      <TouchableOpacity
        onPress={() => setSelectedPayment("mtn")}
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Ionicons
          name={
            selectedPayment === "mtn" ? "radio-button-on" : "radio-button-off"
          }
          size={24}
          color={selectedPayment === "mtn" ? "#ffc107" : "#ccc"}
        />
        <Text style={{ marginLeft: 10, fontSize: 16 }}>MTN Mobile Money</Text>
      </TouchableOpacity>

      {/* Orange Option */}
      <TouchableOpacity
        onPress={() => setSelectedPayment("orange")}
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Ionicons
          name={
            selectedPayment === "orange"
              ? "radio-button-on"
              : "radio-button-off"
          }
          size={24}
          color={selectedPayment === "orange" ? "#ff9800" : "#ccc"}
        />
        <Text style={{ marginLeft: 10, fontSize: 16 }}>Orange Money</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View
        style={{ height: 1, backgroundColor: "#ddd", marginVertical: 15 }}
      />

      {/* Phone Number Input */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Enter Phone Number</Text>
      <TextInput
        style={styles.text}
        placeholder="e.g., 6XXXXXXXX"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* Amount Display */}
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Amount: <Text style={{ fontWeight: "bold" }}>1000 XAF</Text>
      </Text>

      {/* Make Payment Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#007bff",
          padding: 15,
          borderRadius: 5,
          alignItems: "center",
        }}  
        onPress={() => navigation.navigate("Successful")}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Make Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  text:{
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  }
});
