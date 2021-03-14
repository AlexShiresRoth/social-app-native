import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import { Text, View } from '../components/Themed';
import { CREATE_ACCOUNT } from '../mutations/userMutations';

export default function TabTwoScreen() {
	const [email, setEmail] = useState('');
	const [handle, setHandle] = useState('');
	const [password, setPassword] = useState('');
	const [passwordTwo, setPasswordTwo] = useState();
	const [signup, { loading, error, data }] = useMutation(CREATE_ACCOUNT);

	const handleSignup = () => signup({ variables: { email, handle, password, passwordTwo } });

	console.log(error, loading, data);
	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Text>Welcome to Parade</Text>
				<Text>the social app that doesn't track you</Text>
				<Text style={styles.title}>Signup</Text>
				<View style={styles.inputs_container}>
					<Input
						style={styles.input}
						containerStyle={styles.column}
						placeHolderText={'Add your email'}
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
						placeHolderText={'Create a handle'}
						isSecure={false}
						callback={setHandle}
						value={handle}
						label={'Handle'}
						hasLabel={true}
						labelStyle={styles.label}
						placeHolderColor={'#666'}
					/>
					<Input
						style={styles.input}
						containerStyle={styles.column}
						placeHolderText={'Create a password'}
						isSecure={true}
						callback={setPassword}
						value={password}
						label={'Password'}
						hasLabel={true}
						labelStyle={styles.label}
						placeHolderColor={'#666'}
					/>
					<Input
						style={styles.input}
						containerStyle={styles.column}
						placeHolderText={'Confirm Password'}
						isSecure={true}
						callback={setPasswordTwo}
						value={passwordTwo}
						label={'Confirm Password'}
						hasLabel={true}
						labelStyle={styles.label}
						placeHolderColor={'#666'}
					/>
					{error && <Text>{error.message}</Text>}
					{data && !data.success && <Text>{data.message}</Text>}
					{!loading ? (
						<PrimaryButton
							title={'Signup'}
							callback={handleSignup}
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
}

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
		color: '#666',
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
	},
	button_text: {
		fontWeight: '700',
		color: '#fff',
	},
});
