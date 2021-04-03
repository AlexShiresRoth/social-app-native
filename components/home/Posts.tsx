import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../mutations/postQueries';
import styled from 'styled-components/native';
import Post from './Post';
import LoadingSpinner from '../loading/LoadingSpinner';
import { Text, View, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

const PostList = styled.FlatList`
	flex: 1;
	display: flex;
	width: 100%;
	background-color: #fff;
`;
const LoadingContainer = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const DeviceHeight = Dimensions.get('window').height;
const Posts = () => {
	const theme = useColorScheme();
	const { loading, error, data } = useQuery(GET_POSTS);

	console.log('loading,', loading, 'error', error, 'data', data);

	const renderItem = ({ item }: any) => {
		console.log('data!', item);
		return <Post data={item} />;
	};

	if (loading) {
		return (
			<LoadingContainer>
				<Text>Loading posts...</Text>
				<LoadingSpinner />
			</LoadingContainer>
		);
	}

	if (error) {
		return (
			<View>
				<Text>Looks like an error ocurred</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={{ backgroundColor: Colors[theme].background, borderWidth: 0, minHeight: DeviceHeight }}>
			<PostList data={data.getPosts} renderItem={renderItem} keyExtractor={(item: any) => item.date} />
		</SafeAreaView>
	);
};

Posts.propTypes = {};

export default Posts;
