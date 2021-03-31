import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import TopStack from '../components/home/TopStack';

const Content = styled.ScrollView`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Inner = styled.View`
	width: 95%;
	display: flex;
	flex-direction: column;
`;

const HomeScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
			<Content contentContainerStyle={{ alignItems: 'center' }}>
				<Inner>
					<TopStack />
				</Inner>
			</Content>
		</SafeAreaView>
	);
};

export default HomeScreen;
