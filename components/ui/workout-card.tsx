import { StyleSheet, Text, View } from "react-native";

type Props = {
  exercise: string;
  weight: number;
  reps: number;
};

export default function WorkoutCard({ exercise, weight, reps }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.exercise}>{exercise}</Text>
      <Text>Weight: {weight} lbs</Text>
      <Text>Reps: {reps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  exercise: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
