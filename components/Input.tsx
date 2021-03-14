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
	labelStyle,
	placeHolderColor,
}: InputParamList) => {
	return (
		<View style={containerStyle}>
			{hasLabel && (
				<View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
					<Text style={labelStyle}>{label}</Text>
				</View>
			)}
			<TextInput
				style={style}
				placeholder={placeHolderText}
				value={value}
				onChangeText={(text) => callback(text)}
				secureTextEntry={isSecure}
				placeholderTextColor={placeHolderColor}
			/>
		</View>
	);
};

export default Input;
