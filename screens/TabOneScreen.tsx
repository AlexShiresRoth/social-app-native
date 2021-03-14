import { useMutation } from '@apollo/client';
import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { connect, RootStateOrAny } from 'react-redux';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';

import { Text, View } from '../components/Themed';
import { LOGIN_USER } from '../mutations/userMutations';
import { loginUser } from '../redux-store/actions/users';

const TabOneScreen = function () {
	const { colors } = useTheme();

	const [login, { error, loading, data }] = useMutation(LOGIN_USER);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleLogin = () => {
		login({ variables: { email, password } });
	};

	console.log('data!', error?.message, loading, data, colors);

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Text>Welcome to Parade</Text>
				<Text>the social app that doesn't track you</Text>
				<Text style={styles.title}>Login</Text>
				<View style={styles.inputs_container}>
					<Input
						style={styles.input}
						containerStyle={styles.column}
						placeHolderText={'enter your email'}
						isSecure={false}
						callback={setEmail}
						value={email}
						hasLabel={true}
						label={'Email'}
						labelStyle={styles.label}
						placeHolderColor={'#666'}
					/>
					<Input
						style={styles.input}
						containerStyle={styles.column}
						placeHolderText={'enter your password'}
						isSecure={true}
						callback={setPassword}
						value={password}
						label={'Password'}
						hasLabel={true}
						labelStyle={styles.label}
						placeHolderColor={'#666'}
					/>
					{!loading ? (
						<PrimaryButton
							title={'Login'}
							callback={handleLogin}
							style={styles.button}
							textStyle={styles.button_text}
						/>
					) : (
						<Text>Loading...</Text>
					)}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inner: {
		width: '90%',
	},
	inputs_container: {
		display: 'flex',
	},
	input: {
		padding: 5,
		color: '#F8F1FF',
	},
	column: {
		marginTop: 25,
		marginBottom: 0,
		padding: 5,
		borderRadius: 5,
		borderColor: '#1B998B',
		borderWidth: 2,
		backgroundColor: '#fff',
	},
	title: {
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	label: {
		color: '#1A1423',
		marginTop: -17,
		marginLeft: 5,
		backgroundColor: '#fff',
		fontWeight: '700',
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
