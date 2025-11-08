import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Progress() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Progress Screen</Text>
      <Button title="Back to Home" onPress={() => router.push('/home' as any)} />
    </View>
  );
}
