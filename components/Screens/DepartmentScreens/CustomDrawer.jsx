import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import React from 'react'

export default function CustomDrawer({navigation}) {
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
            onPress={() => navigation.navigate("Logout")}
          >
            <Ionicons name="share-outline" size={24} color="#000" />
            <Text style={styles.drawerText}>Share</Text>
          </TouchableOpacity>
    
          {/* Logout */}
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => console.log("Logout pressed")}
          >
            <MaterialIcons name="logout" size={24} color="#000" />
            <Text style={styles.drawerText}>Logout</Text>
          </TouchableOpacity>
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
      });
