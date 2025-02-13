import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
export default function DepartmentScreen({ route, navigation }) {
  const { school } = route.params;

  const handleDepartmentClick = (department) => {
    navigation.navigate("Courses", { department });
  };

  const renderDepartment = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleDepartmentClick(item)}
      style={styles.departmentItem}
    >
      <Text style={styles.text}>{item.name}</Text>
      <Ionicons name="chevron-forward" size={18} color="black" />
    </TouchableOpacity>
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
        <Text style={styles.title}>{school.name}</Text>

        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={school.departments}
        renderItem={renderDepartment}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.departmentList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",
  },
  departmentList: {
    paddingHorizontal: 20,
  },
  departmentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  departmentText: {
    fontSize: 16,
    color: "#000",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
  },
});
