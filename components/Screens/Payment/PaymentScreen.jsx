import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentScreen({ navigation }) {
  const [selectedPayment, setSelectedPayment] = useState("mtn");
  const [phoneNumber, setPhoneNumber] = useState("672-156-514");
  const [amount, setAmount] = useState("1000 xaf");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconLeft}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Payment</Text>

        <TouchableOpacity
          style={styles.iconRight}
          onPress={() => console.log("Search clicked")}
        >
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>Select Payment Method</Text>

      {/* MTN Option */}
      <TouchableOpacity
        onPress={() => setSelectedPayment("mtn")}
        style={[
          styles.optionBox,
          selectedPayment === "mtn" && styles.selectedBox,
        ]}
      >
        <Image
          source={require("../../../assets/images/mtn.png")}
          style={styles.logo}
        />
        <Text style={styles.optionText}>MTN Mobile Money (momo)</Text>
        <Ionicons
          name={
            selectedPayment === "mtn" ? "radio-button-on" : "radio-button-off"
          }
          size={24}
          color={selectedPayment === "mtn" ? "#4CAF50" : "#ccc"}
        />
      </TouchableOpacity>

      {/* Orange Option */}
      <TouchableOpacity
        onPress={() => setSelectedPayment("orange")}
        style={[
          styles.optionBox,
          selectedPayment === "orange" && styles.selectedBox,
        ]}
      >
        <Image
          source={require("../../../assets/images/orange.png")}
          style={styles.logo}
        />
        <Text style={styles.optionText}>Orange Mobile Money</Text>
        <Ionicons
          name={
            selectedPayment === "orange"
              ? "radio-button-on"
              : "radio-button-off"
          }
          size={24}
          color={selectedPayment === "orange" ? "#FF9800" : "#ccc"}
        />
      </TouchableOpacity>
      {/* Divider */}
      <View style={styles.divider} />

      {/* Phone Number Input */}
      <Text style={styles.label}>Enter Phone Number</Text>
      <TextInput
        style={styles.textInput}
        placeholder="e.g., 6XXXXXXXX"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* Amount Display */}
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.textInput}
        placeholder="1000 XAF"
        keyboardType="number-pad"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Make Payment Button */}
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate("Successful")}
      >
        <Text style={styles.paymentButtonText}>Make Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    backgroundColor: "#269C5F",
    zIndex: 1000,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconLeft: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ translateY: -12 }], // Centers the icon vertically
  },
  iconRight: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }], // Centers the icon vertically
  },

  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  selectedBox: {
    borderColor: "#4CAF50",
    backgroundColor: "#F1F8E9",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentButton: {
    backgroundColor: "#269C5F",
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
});
