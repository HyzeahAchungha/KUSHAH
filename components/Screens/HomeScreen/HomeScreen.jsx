import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
const schools = [
  {
    id: "1",
    name: "School of Business & MGT Sciences",
    departments: [
      {
        id: "1",
        name: "Computer Engineering",
        courses: [
          { id: "1", name: "Data Structures",
            "questions": [
              "What is a linked list?",
              "Explain binary trees.",
              "Define hash tables."
            ],
            "questions": [
              "What is a linked list?",
              "Explain binary trees.",
              "Define hash tables."
            ]
          },
          
          { id: "2", name: "Algorithms" },
          { id: "3", name: "Operating Systems" },
        ],
      },
      {
        id: "2",
        name: "Electrical Engineering",
        courses: [
          { id: "1", name: "Circuit Analysis" },
          { id: "2", name: "Digital Electronics" },
          { id: "3", name: "Power Systems" },
          
        ],
      },
      {
        id: "3",
        name: "Mechanical Engineering",
        courses: [
          { id: "1", name: "Thermodynamics" },
          { id: "2", name: "Fluid Mechanics" },
          { id: "3", name: "Machine Design" },
        ],
      },
    ],

  },
  {
    id: "2",
    name: "School 2",
    departments: [
      {
        id: "1",
        name: "Business Administration",
        courses: [
          { id: "1", name: "Accounting Principles" },
          { id: "2", name: "Marketing Strategies" },
          { id: "3", name: "Organizational Behavior" },
        ],
      },
      {
        id: "2",
        name: "Marketing",
        courses: [
          { id: "1", name: "Consumer Behavior" },
          { id: "2", name: "Digital Marketing" },
          { id: "3", name: "Brand Management" },
        ],
      },
    ],
  },
  { id: "3", name: "School 3", departments: [] }, // Add departments here
  { id: "4", name: "School 4", departments: [] },
  { id: "5", name: "School 5", departments: [] }, // Add departments here
  { id: "6", name: "School 6", departments: [] },
  { id: "7", name: "School 7", departments: [] }, // Add departments here
  { id: "8", name: "School 8", departments: [] },
];
export default function HomeScreen() {
  const navigation = useNavigation();
  const handleSchoolClick = (school) => {
    navigation.navigate("Departments", { school });
  };

  const renderSchool = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSchoolClick(item)}
      style={styles.departmentItem}
    >
      <Text style={styles.departmentText}>{item.name}</Text>
      <SimpleLineIcons name="arrow-right" size={15} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        
        <TouchableOpacity onPress={() =>navigation.toggleDrawer()}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={() => console.log("Search clicked")}>
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* school Section */}

      <FlatList
        data={schools}
        renderItem={renderSchool}
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
    fontSize: 20,
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
