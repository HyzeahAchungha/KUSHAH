import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
export default function CourseScreen({ route, navigation }) {
  const { department } = route.params;

  // const [selectedYear, setSelectedYear] = useState("2024");
  const currentYear = new Date().getFullYear();
  const freeYears = [currentYear, currentYear - 1, currentYear - 2]; // Now 3 years free
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [pendingYear, setPendingYear] = useState(null); // Store year before 
  


  const handleYearChange = (itemValue) => {
    const selected = parseInt(itemValue);
    if (!freeYears.includes(selected)) {
      setPendingYear(itemValue); // Store it temporarily
      setShowPaymentModal(true);
    } else {
      setSelectedYear(itemValue); // Directly update if free
    }
  };

  const handleProceedToPayment = () => {
    setShowPaymentModal(false);
    navigation.navigate("PaymentScreen", { year: pendingYear });
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setPendingYear(null); // Reset pending year
  };

  const handleCourseClick = (course) => {
    navigation.navigate("Questions", { course });
  };

  const renderCourse = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleCourseClick(item)}
      style={styles.departmentItem}
    >
      <Text style={styles.text}>{item.name}</Text>
      <SimpleLineIcons name="arrow-right" size={15} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, showPaymentModal && styles.disabled]}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{department.name}</Text>

        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Picker Dropdown */}
      {/* <View style={styles.pickerContainer}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            {Array.from(
              { length: 2024 - 2015 + 1 },
              (_, index) => 2015 + index
            ).map((year) => (
              <Picker.Item key={year} label={`${year}`} value={`${year}`} />
            ))}
          </Picker>
        </View>
      </View> */}
     <View style={styles.pickerContainer}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={handleYearChange}
          >
            {Array.from({ length: currentYear - 2015 + 1 }, (_, index) => 2015 + index).map(
              (year) => (
                <Picker.Item key={year} label={`${year}`} value={`${year}`} />
              )
            )}
          </Picker>
        </View>
      </View>

      <FlatList
        data={department.courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.departmentList}
      />

      {/* Payment Modal */}
      {showPaymentModal && (
        <Modal transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Pay subscription for {pendingYear} to access these questions.
              </Text>
              <Pressable style={styles.proceedButton} onPress={handleProceedToPayment}>
                <Text style={styles.proceedText}>Proceed</Text>
              </Pressable>
              <Pressable style={styles.cancelButton} onPress={handleCloseModal}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  disabled: {
    opacity: 0.3, // Dim screen when modal is active
    pointerEvents: "none",
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

  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  pickerBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    height: 40,
    width: 120,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#269C5F",
  },
  picker: {
    height: 80,
    width: 120,
    justifyContent: "center",
    color: "#269C5F",
    backgroundColor: "transparent",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Dim background
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  proceedButton: {
    backgroundColor: "#269C5F",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  proceedText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  cancelText: {
    color: "black",
    fontSize: 16,
  },
});
