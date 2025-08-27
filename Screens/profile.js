 import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const image = require("../Screens/mujahid.jpg");
export const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={image} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Mujahid Ali</Text>
        <Text style={styles.tagline}>Android Developer</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Info Card */}
      <View style={styles.card}>
        <Text style={styles.infoLabel}>📧 mujahid105382gc@gmail.com
        </Text>
        <Text style={styles.infoLabel}>📞 +92 3197619696</Text>
        <Text style={styles.infoLabel}>🏠 Chowk Azam Layyah </Text>
        <Text style={styles.infoLabel}>🏠 Pakistan </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  tagline: {
    fontSize: 14,
    color: 'grey',
    marginTop: 4,
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  infoLabel: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});


