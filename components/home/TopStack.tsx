import React from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { TopStackParamList } from '../../types';

const TopStack = ({ users }: TopStackParamList) => {
	const theme = useColorScheme();

	const Container = styled.View`
		display: flex;
		width: 100%;
		justify-content: center;
		margin-bottom: 5px;
		background-color: ${Colors[theme].primary};
	`;
	const Inner = styled.View`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		padding: 10px;
	`;
	const Avatar = styled.Image`
		display: flex;
		width: 30px;
		height: 30px;
		border-radius: 500px;
		border-width: 2px;
		border-color: ${Colors[theme].background};
	`;

	const Handle = styled.Text`
		color: ${Colors[theme].background};
		font-weight: 700;
	`;

	console.log('these are user', users);
	const {
		user: { avatar, email, handle },
	} = users;

	return (
		<Container>
			<Inner>
				<Avatar source={{ uri: avatar }} />
				<Handle>{handle} </Handle>
			</Inner>
		</Container>
	);
};

const mapStateToProps = (state: RootStateOrAny) => ({
	users: state.users,
});

export default connect(mapStateToProps, {})(TopStack);
