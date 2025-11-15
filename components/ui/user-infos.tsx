import { CURRENT_USER } from '@/constants/user';
import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  onPress?: () => void;
};

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((n) => n[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function UserInfos({ onPress }: Props) {
  const anim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => Animated.spring(anim, { toValue: 0.96, useNativeDriver: true }).start();
  const onPressOut = () => Animated.spring(anim, { toValue: 1, useNativeDriver: true }).start();

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.root, { transform: [{ scale: anim }] }]}>
        <View style={styles.avatarBorder}>
          <View style={styles.avatarInner}>
            <Text style={styles.initials}>{getInitials(CURRENT_USER.name)}</Text>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { flexDirection: 'row', alignItems: 'center' },
  avatarBorder: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#08112a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)'
  },
  avatarInner: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: '#071124',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: { color: '#FFFFFF', fontWeight: '800' },
  // name removed to use initials-only avatar
  name: { display: 'none' } as any,
});
