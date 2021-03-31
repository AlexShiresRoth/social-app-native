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
		margin-top: 10px;
	`;
	const Inner = styled.View`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		padding: 10px;
		background-color: ${Colors[theme].inputBackground};
	`;
	const Avatar = styled.Image`
		display: flex;
		width: 30px;
		height: 30px;
		border-radius: 500px;
		border-width: 2px;

		border-color: ${Colors[theme].text};
	`;

	const EmailText = styled.Text`
		color: ${Colors[theme].text};
	`;

	console.log('these are user', users);
	const {
		user: { avatar, email, handle },
	} = users;

	console.log('this is a avatar', avatar);
	return (
		<Container>
			<Inner>
				<Avatar source={{ uri: avatar }} />
				<EmailText>{handle}</EmailText>
			</Inner>
		</Container>
	);
};

const mapStateToProps = (state: RootStateOrAny) => ({
	users: state.users,
});

export default connect(mapStateToProps, {})(TopStack);
