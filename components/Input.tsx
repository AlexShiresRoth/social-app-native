import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { InputParamList } from '../types';

const Input = ({
	style,
	placeHolderText,
	containerStyle,
	value,
	callback,
	isSecure,
	hasLabel,
	label,
}: InputParamList) => {
	return (
		<View style={containerStyle}>
			{hasLabel && <Text>{label}</Text>}
			<TextInput
				style={style}
				placeholder={placeHolderText}
				value={value}
				onChangeText={(text) => callback(text)}
				secureTextEntry={isSecure}
			/>
		</View>
	);
};

export default Input;
