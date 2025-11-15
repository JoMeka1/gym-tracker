import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Workout() {
  // read ?type=push / pull / legs from the URL
  const { type } = useLocalSearchParams<{ type?: string }>();

  const title =
    type === "push" ? "Push Workout" :
    type === "pull" ? "Pull Workout" :
    type === "legs" ? "Legs Workout" :
    "Workout";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>
        Here we will show the list of exercises and sets for this routine.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 16,
    textAlign: "center",
  },
  sub: { color: "white", textAlign: "center" },
});
