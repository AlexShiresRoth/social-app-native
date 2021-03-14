import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PrimaryButtonParams } from '../types';

const PrimaryButton = ({ callback, title, style, textStyle }: PrimaryButtonParams) => {
	return (
		<TouchableOpacity onPress={callback} style={style}>
			<Text style={textStyle}>{title}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
