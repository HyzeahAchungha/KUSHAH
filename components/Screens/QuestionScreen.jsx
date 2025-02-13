import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function QuestionScreen({ route, navigation }) {
  const { course } = route.params;

  const renderQuestion = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{course.name}</Text>
        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={course.questions}
        renderItem={renderQuestion}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ask Kushah Ai?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: 10 },
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",
  },
  item: {
    padding: 10,
    marginVertical: 5,
  },
  text: { fontSize: 18 },
  button: {
    backgroundColor: "#3498DB",
    paddingVertical: 18,
    paddingHorizontal: 35, 
    borderRadius: 12,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});
