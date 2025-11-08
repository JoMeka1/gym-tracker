import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Gym Evolution Tracker</Text>
      <Text style={{ marginVertical: 12 }}>Welcome to your first screen</Text>
      <Button title="Go to Progress" onPress={() => router.push('/progress' as any)} />
    </View>
  );
}
