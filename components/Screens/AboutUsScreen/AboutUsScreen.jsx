import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function AboutUsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>KUSHAH V. 1.0.0</Text>
      <Text style={styles.text}>
        Accessing past exam papers has never been this convenient, efficient,
        and free! Everything you need, right at your fingertips on your
        smartphone or tablet. Prepare to enhance your grades!
      </Text>
      <Text style={styles.text}>
        Say goodbye to the time-consuming task of searching for past exam
        papers.
      </Text>
      <Text style={styles.text}>
        This app, designed with an ad-supported structure, is offered entirely
        free of charge and is intended for immediate use.
      </Text>
      <Text style={styles.text}>
        If you are a student, teacher, or someone in need of past exam papers,
        this app is the perfect solution for you.
      </Text>
      <Text style={styles.text}>
        All exam papers and materials available within the app have been
        collected and digitized by the app developers from publicly available
        sources and through contributions, and are intended for personal and
        educational use only.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#269C5F",
    textAlign: "right",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "right",
    marginBottom: 10,
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
});
