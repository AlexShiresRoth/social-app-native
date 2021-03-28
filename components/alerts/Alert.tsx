import React from 'react';
import styled from 'styled-components/native';
import { AlertParams } from '../../types';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const AlertContainer = styled.View`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	border-radius: 5px;
	margin: 5px 0;
`;
const AlertText = styled.Text`
	width: 90%;
	font-size: 14px;
`;

const Alert = ({ message, status }: AlertParams) => {
	const theme = useColorScheme();
	return (
		<AlertContainer style={{ backgroundColor: status === 'danger' ? Colors[theme].danger : Colors[theme].success }}>
			<AlertText style={{ color: Colors[theme].text }}>{message}</AlertText>
		</AlertContainer>
	);
};

export default Alert;
