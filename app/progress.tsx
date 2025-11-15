import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import WorkoutCard from "@/components/ui/workout-card";

export default function Progress() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Progress Screen</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Gym Evolution Tracker</Text>
      <WorkoutCard exercise="Squat" weight={90} reps={10} />
      <WorkoutCard exercise="Deadlift" weight={110} reps={8} />
      <Button title="Back to Home" onPress={() => router.push('/home' as any)} />
    </View>
  );
}
