import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { CURRENT_USER } from "../constants/user";

export default function Settings() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* User section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User</Text>
        <View style={styles.box}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{CURRENT_USER.name}</Text>
        </View>
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.box}>
          <Text style={styles.label}>Unit:</Text>
          <Text style={styles.value}>{CURRENT_USER.settings.unit}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Theme:</Text>
          <Text style={styles.value}>{CURRENT_USER.settings.theme}</Text>
        </View>
      </View>

      {/* Placeholder for future features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More coming soon...</Text>
        <Text style={{ color: "gray" }}>AI recommendations, Favorites, Profile picture</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  backButton: {
    color: "white",
    fontSize: 18,
    marginRight: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "600",
  },
  box: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    color: "#ccc",
    fontSize: 14,
  },
  value: {
    color: "white",
    fontSize: 18,
    marginTop: 4,
  },
});
