import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import React from "react";

export default function CourseDetailsScreen() {
  const route = useRoute();
  const { course } = route.params;

  const renderQuestion = ({ item }) => (
    <View style={styles.questionItem}>
      <Text style={styles.questionText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <FlatList
        data={course.questions}
        renderItem={renderQuestion}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  questionItem: {
    padding: 15,
    backgroundColor: "#eee",
    marginVertical: 10,
    borderRadius: 5,
  },
  questionText: { fontSize: 16 },
  list: { paddingBottom: 20 },
  
});
