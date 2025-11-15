import FancyButton from '@/components/ui/fancy-button';
import GradientHeader from '@/components/ui/gradient-header';
import UserInfos from '@/components/ui/user-infos';
import WorkoutCard from '@/components/ui/workout-card';
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  // helper function so we don't repeat ourselves
  const startWorkout = (type: "push" | "pull" | "legs") => {
    router.push(`/workouts?type=${type}` as any);
  };

  const recent = [
    { exercise: 'Squat', weight: 90, reps: 10 },
    { exercise: 'Deadlift', weight: 110, reps: 8 },
    { exercise: 'Bench Press', weight: 70, reps: 8 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <GradientHeader title="Gym Tracker" right={<UserInfos onPress={() => router.push('/settings' as any)} />} />

      {/* Title + Edit */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>Workouts</Text>
        <Pressable onPress={() => router.push('/workouts/edit' as any)} style={styles.editButtonInline}>
          <Text style={styles.editText}>Edit</Text>
        </Pressable>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        <FancyButton variant="filled" style={styles.primaryButton} onPress={() => startWorkout('push')}>PUSH</FancyButton>
        <FancyButton variant="filled" style={styles.primaryButton} onPress={() => startWorkout('pull')}>PULL</FancyButton>
        <FancyButton variant="filled" style={styles.primaryButton} onPress={() => startWorkout('legs')}>LEGS</FancyButton>
      </View>

      {/* Recent Workouts */}
      <Text style={styles.sectionTitle}>Recent</Text>
      <View style={styles.recentList}>
        {recent.map((r, i) => (
          <WorkoutCard key={i} exercise={r.exercise} weight={r.weight} reps={r.reps} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#000000", paddingHorizontal: 18, paddingTop: 6, paddingBottom: 24 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  headerText: { fontSize: 20, color: "white" },
  headerName: { fontSize: 20, color: "white" },
  title: {
    fontSize: 26,
    color: "#eaf6ff",
    marginTop: 16,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: '800'
  },
  buttonsRow: {
    width: '100%',
    marginTop: 6,
    gap: 8,
  },
  primaryButton: {
    marginVertical: 6,
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: 10,
  },
  editText: { color: '#FFFFFF', fontWeight: '700', fontSize: 12 },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 },
  editButtonInline: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#FFFFFF' },
  button: {
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 18 },
  sectionTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '700', marginTop: 18, marginBottom: 8 },
  recentList: { width: '100%' },
});
