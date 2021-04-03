import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Posts from '../components/home/Posts';
import TopStack from '../components/home/TopStack';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const Content = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Inner = styled.View`
	width: 95%;
	display: flex;
	flex-direction: column;
`;

const HomeScreen = () => {
	const theme = useColorScheme();

	return (
		<SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
			<Content style={{ alignItems: 'center', backgroundColor: Colors[theme].background }}>
				<TopStack />
				<Inner>
					<Posts />
				</Inner>
			</Content>
		</SafeAreaView>
	);
};

export default HomeScreen;
