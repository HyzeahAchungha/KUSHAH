import { View, Text,StyleSheet,TouchableOpacity} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
export default function PrivacyPolicyScreen() {
   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Privacy Policy</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>
      <Text style={styles.title}>Cancelation Terms</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisci ng elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. veniaquis nostrud
        exercitation ullamco laboris nisi ut aelit esse cillum dolore eu fugiat
        nulla pariatur. sit amet, consectetur adipisci ng elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. veniaquis nostrud
        exercitation ullamco laboris nisi ut aelit esse cillum dolore eu fugiat
        nulla pariatur. 
      </Text>
      <Text style={styles.title}>Terms & Conditions</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisci ng elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. veniaquis nostrud
        exercitation ullamco laboris nisi ut aelit esse cillum dolore eu fugiat
        nulla pariatur. sit amet, consectetur adipisci ng elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. veniaquis nostrud
        exercitation ullamco laboris nisi ut aelit esse cillum dolore eu fugiat
        nulla pariatur. .
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisci ng elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. veniaquis nostrud
        exercitation ullamco laboris nisi ut aelit esse cillum dolore eu fugiat
        nulla pariatur. sit amet, consectetur adipisci ng elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. veniaquis nostrud
        exercitation ullamco laboris nisi ut aelit esse cillum dolore eu fugiat
        nulla pariatur. 
      </Text>
      <Text style={styles.text}>
        All exam papers and materials available within the app have been
        collected and digitized by the app developers from publicly available
        sources and through contributions, and are intended for personal and
        educational use only.
      </Text>
      <Text style={styles.text}>
        All exam papers and materials available within the app have been
        collected and digitized by the app developers from publicly available
        sources and through contributions, and are intended for personal and
        educational use only.
      </Text>
      <Text style={styles.text}>
        All exam papers and materials available within the app have been
        collected and digitized by the app developers from publicly available
        sources and through contributions, and are intended for personal and
        educational use only.
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
