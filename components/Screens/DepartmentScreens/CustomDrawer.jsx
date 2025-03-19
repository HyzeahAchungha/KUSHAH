import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Switch,
  Animated,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CustomDrawer({ navigation }) {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [confirmChoice, setConfirmChoice] = useState(null);
  const [rememberChoice, setRememberChoice] = useState(false);
  const fadeAnim = new Animated.Value(0);

  // Load saved choice from AsyncStorage
  useEffect(() => {
    const loadRememberChoice = async () => {
      const savedChoice = await AsyncStorage.getItem("logoutChoice");
      if (savedChoice) {
        setConfirmChoice(savedChoice);
        setRememberChoice(true);
      }
    };
    loadRememberChoice();
  }, []);

  // Smooth fade-in animation
  const showModal = () => {
    setLogoutVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setLogoutVisible(false));
  };

  const handleLogout = async () => {
    if (confirmChoice === "yes") {
      console.log("User logged out");
      if (rememberChoice) {
        await AsyncStorage.setItem("logoutChoice", confirmChoice);
      } else {
        await AsyncStorage.removeItem("logoutChoice");
      }
      hideModal();
      navigation.replace("Login");
    } else {
      hideModal();
    }
  };

  return (
    <View style={styles.drawerContainer}>
      {/* Ask Kushah AI */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("AskKushahAI")}
      >
        <Ionicons name="chatbubble-outline" size={24} color="#000" />
        <Text style={styles.drawerText}>Ask Kushah AI</Text>
      </TouchableOpacity>

      {/* About Us */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("AboutUs")}
      >
        <Ionicons name="information-circle-outline" size={24} color="#000" />
        <Text style={styles.drawerText}>About Us</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <Ionicons name="shield-checkmark-outline" size={24} color="#000" />
        <Text style={styles.drawerText}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Separator Line */}
      <View style={styles.separator} />

      {/* Share */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => console.log("Share feature coming soon")}
      >
        <Ionicons name="share-outline" size={24} color="#000" />
        <Text style={styles.drawerText}>Share</Text>
      </TouchableOpacity>

      {/* feedback */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Feedback")}
      >
        <Ionicons name="shield-checkmark-outline" size={24} color="#000" />
        <Text style={styles.drawerText}>Feedback</Text>
      </TouchableOpacity>


      {/* Logout Button */}
      <TouchableOpacity style={styles.drawerItem} onPress={showModal}>
        <MaterialIcons name="logout" size={24} color="#000" />
        <Text style={styles.drawerText}>Logout</Text>
      </TouchableOpacity>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent={true}
        visible={logoutVisible}
        animationType="none"
        onRequestClose={hideModal}
      >
        <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>

            {/* Yes/No Radio Buttons */}
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={[
                  styles.radioOption,
                  confirmChoice === "yes" && styles.radioSelected,
                ]}
                onPress={() => setConfirmChoice("yes")}
              >
                <Text style={styles.radioText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.radioOption,
                  confirmChoice === "no" && styles.radioSelected,
                ]}
                onPress={() => setConfirmChoice("no")}
              >
                <Text style={styles.radioText}>No</Text>
              </TouchableOpacity>
            </View>

            {/* Remember Choice Toggle */}
            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>Remember my choice</Text>
              <Switch
                value={rememberChoice}
                onValueChange={() => setRememberChoice(!rememberChoice)}
              />
            </View>

            {/* Confirm & Cancel Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={hideModal}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.confirmButton,
                  confirmChoice !== "yes" && { backgroundColor: "#ccc" },
                ]}
                onPress={handleLogout}
                disabled={confirmChoice !== "yes"}
              >
                <Text style={styles.confirmText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  drawerText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#000",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 15,
  },
  radioOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  radioSelected: {
    backgroundColor: "#E62C33",
    borderColor: "#E62C33",
  },
  radioText: {
    color: "#000",
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  toggleText: {
    marginRight: 10,
    fontSize: 14,
    color: "#555",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#E62C33",
  },
  cancelText: {
    color: "#000",
    fontWeight: "bold",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
