import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { PostParamList } from '../../types';
import { Text } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

const PostCard = styled.View`
	padding: 20px;
	height: 100px;
	margin: 10px 0;
`;
const Post = ({ data }: PostParamList) => {
	const theme = useColorScheme();
	console.log('this is data', data);
	const { author, avatar, content, date } = data;
	return (
		<PostCard style={{ backgroundColor: Colors[theme].inputBackground }}>
			<Text style={{ color: '#666' }}>{author}</Text>
		</PostCard>
	);
};

Post.propTypes = {};

export default Post;
