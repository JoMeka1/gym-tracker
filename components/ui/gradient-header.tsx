import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  right?: React.ReactNode;
};

// Fallback header that visually mimics a gradient using layered views
// This avoids a native dependency so Metro can bundle regardless of environment.
export default function GradientHeader({ title, right }: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.gradientFake} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#071124',
  },
  // layered view to give a subtle two-tone effect
  gradientFake: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.02)',
    transform: [{ rotate: '-6deg' }],
    top: -8,
    left: -24,
    right: -24,
    height: 64,
  },
  title: { color: '#eaf6ff', fontSize: 20, fontWeight: '800', letterSpacing: 0.6 },
  right: {},
});
