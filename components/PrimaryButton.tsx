import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { PrimaryButtonParams } from '../types';

const PrimaryButton = ({ callback, title, style, textStyle }: PrimaryButtonParams) => {
	const colorScheme: String = useColorScheme();

	return (
		<TouchableOpacity onPress={callback} style={[style, { backgroundColor: Colors[colorScheme].primary }]}>
			<Text style={textStyle}>{title}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
