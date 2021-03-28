import React, { useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const LoadingSpinner = () => {
	const theme = useColorScheme();
	const SpinAnim = useRef(new Animated.Value(0)).current;

	Animated.loop(
		Animated.timing(SpinAnim, {
			toValue: 1,
			duration: 500,
			easing: Easing.linear,
			useNativeDriver: true,
		})
	).start();

	const spin = SpinAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	return (
		<Animated.View
			style={[styles.loading, { transform: [{ rotate: spin }], borderBottomColor: Colors[theme].tint }]}
		></Animated.View>
	);
};

const styles = StyleSheet.create({
	loading: {
		height: 36,
		width: 36,
		borderRadius: 500,
		borderWidth: 3,
		borderTopColor: 'transparent',
		borderRightColor: 'transparent',
		borderLeftColor: 'transparent',
		display: 'flex',
	},
});

export default LoadingSpinner;
