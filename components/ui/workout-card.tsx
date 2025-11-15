import { StyleSheet, Text, View } from 'react-native';

type Props = {
  exercise: string;
  weight: number;
  reps: number;
};

export default function WorkoutCard({ exercise, weight, reps }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.exercise}>{exercise}</Text>
      <Text style={styles.meta}>{`Weight: ${weight} lbs • Reps: ${reps}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#071124',
    padding: 18,
    borderRadius: 14,
    marginVertical: 10,
    shadowColor: '#071124',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)'
  },
  exercise: {
    fontWeight: '800',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  meta: { color: 'rgba(255,255,255,0.85)', fontSize: 14 },
});
