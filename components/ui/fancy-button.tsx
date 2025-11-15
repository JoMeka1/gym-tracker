import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: any;
  variant?: 'filled' | 'outline' | 'ghost';
};

export default function FancyButton({ children, onPress, style, variant = 'filled' }: Props) {
  const anim = useRef(new Animated.Value(1)).current;
  const pressIn = () => Animated.spring(anim, { toValue: 0.96, useNativeDriver: true }).start();
  const pressOut = () => Animated.spring(anim, { toValue: 1, useNativeDriver: true }).start();

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut} style={{ marginVertical: 8 }}>
      <Animated.View
        style={[
          styles.btn,
          variant === 'filled' && styles.filled,
          variant === 'outline' && styles.outline,
          variant === 'ghost' && styles.ghost,
          style,
          { transform: [{ scale: anim }] },
        ]}
      >
        <Text style={[styles.text, variant === 'outline' && styles.textOutline, variant === 'ghost' && styles.textGhost]}>
          {children}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#071124',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#071124',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  text: { color: '#FFFFFF', fontWeight: '800', letterSpacing: 1 },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: 'transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  textOutline: { color: '#FFFFFF' },
  textGhost: { color: '#FFFFFF', opacity: 0.95 },
  filled: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});
