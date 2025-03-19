import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
export default function FeedBackScreen({navigation}) {
  const [feedbackType, setFeedbackType] = useState("General Feedback");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() === "") {
      alert("Please enter a message!");
      return;
    }
    console.log(`Type: ${feedbackType}, Message: ${message}`);
    alert("Feedback sent successfully!");
    setMessage("");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Feedback</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      {/* Dropdown */}
      <RNPickerSelect
        onValueChange={(value) => setFeedbackType(value)}
        items={[
          { label: "General Feedback", value: "General Feedback" },
          { label: "Suggestion", value: "Suggestion" },
          { label: "Bug Report", value: "Bug Report" },
          { label: "Other", value: "Other" },
        ]}
        value={feedbackType}
        style={{
          inputIOS: styles.dropdown,
          inputAndroid: styles.dropdown,
        }}
      />

      {/* Textbox */}
      <TextInput
        style={styles.textbox}
        placeholder="Write your message here..."
        placeholderTextColor="#aaa"
        multiline
        value={message}
        onChangeText={(text) => setMessage(text)}
      />

      {/* Send Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  dropdown: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    color: "#333",
  },
  textbox: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: "auto",
    width: 100,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
