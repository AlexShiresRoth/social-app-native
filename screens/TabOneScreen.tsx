import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { connect, RootStateOrAny } from 'react-redux';
import Input from '../components/Input';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import PrimaryButton from '../components/PrimaryButton';
import { Text, View } from '../components/Themed';
import { LOGIN_USER } from '../mutations/userMutations';
import { loginUser } from '../redux-store/actions/users';
import styled from 'styled-components/native';

import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import Alert from '../components/alerts/Alert';

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const Inner = styled.View`
	width: 90%;
`;

const InputContainer = styled.View`
	display: flex;
	margin-top: 10px;
`;

const LoadingContainer = styled.View`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Title = styled.Text`
	margin-top: 20px;
	font-size: 20px;
	font-weight: 700;
`;

const labelStyle = {
	marginTop: -17,
	marginLeft: 5,
	fontWeight: '700',
};

const TabOneScreen = function ({ users, loginUser }: any) {
	const theme = useColorScheme();
	const [login, { error, loading, data }] = useMutation(LOGIN_USER);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [alert, setAlertStatus] = useState({
		status: '',
		message: '',
		isVisible: false,
	});

	const { isVisible, status, message } = alert;

	//remove the alert after time
	useEffect(() => {
		if (isVisible) {
			setTimeout(() => {
				console.log('is visible baby?', isVisible);
				setAlertStatus({
					status: '',
					message: '',
					isVisible: false,
				});
			}, 3000);
		}
	}, [alert]);

	useEffect(() => {
		if (error) {
			setAlertStatus({
				status: 'danger',
				message: error.message,
				isVisible: true,
			});
		}
		if (data && !data.loginUser.success) {
			// console.log('wtf is this data', data.loginUser.message);
			setAlertStatus({
				status: 'danger',
				message: data.loginUser.message,
				isVisible: true,
			});
		}
	}, [error, data]);

	const handleLogin = () => {
		login({ variables: { email, password } });
	};

	useEffect(() => {
		if (data && data.loginUser.success) {
			loginUser(data.loginUser);
		}
	}, [data]);

	// console.log('user', users);
	return (
		<Container>
			<Inner>
				<Text style={{ color: Colors[theme].text, fontSize: 30, fontWeight: '700' }}>Welcome to Parade</Text>
				<Text>A minimalistic social media platform</Text>

				<Title style={{ color: Colors[theme].text }}>Login</Title>
				<InputContainer>
					<Input
						style={{ padding: 5, color: Colors[theme].text }}
						containerStyle={[styles.column, { backgroundColor: Colors[theme].inputBackground }]}
						placeHolderText={'enter your email'}
						isSecure={false}
						callback={setEmail}
						value={email}
						hasLabel={true}
						label={'Email'}
						labelStyle={[labelStyle, { color: Colors[theme].text }]}
						placeHolderColor={'#666'}
					/>
					<Input
						style={{ padding: 5, color: Colors[theme].text }}
						containerStyle={[styles.column, { backgroundColor: Colors[theme].inputBackground }]}
						placeHolderText={'enter your password'}
						isSecure={true}
						callback={setPassword}
						value={password}
						label={'Password'}
						hasLabel={true}
						labelStyle={[labelStyle, { color: Colors[theme].text }]}
						placeHolderColor={'#666'}
					/>
					{isVisible && <Alert status={status} message={message} />}
					{!loading ? (
						<PrimaryButton
							title={'Login'}
							callback={handleLogin}
							style={styles.button}
							textStyle={styles.button_text}
						/>
					) : (
						<LoadingContainer>
							<LoadingSpinner />
							<Text>Loading...</Text>
						</LoadingContainer>
					)}
				</InputContainer>
			</Inner>
		</Container>
	);
};

const styles = StyleSheet.create({
	input: {
		padding: 5,
	},
	column: {
		marginTop: 20,
		marginBottom: 20,
		padding: 5,
		borderRadius: 5,
		borderWidth: 0,
	},

	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},

	button: {
		backgroundColor: '#3D314A',
		marginTop: 20,
		padding: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		elevation: 20,
	},
	button_text: {
		fontWeight: '700',
		color: '#fff',
	},
});

const mapStateToProps = (state: RootStateOrAny) => ({
	users: state.users,
});

export default connect(mapStateToProps, { loginUser })(TabOneScreen);
