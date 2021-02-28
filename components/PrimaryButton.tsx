import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PrimaryButtonParams } from '../types';

const PrimaryButton = ({ callback, title, style }: PrimaryButtonParams) => {
	return (
		<TouchableOpacity onPress={callback} style={style}>
			<Text>{title}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
