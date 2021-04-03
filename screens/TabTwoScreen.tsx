import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import { Text, View } from '../components/Themed';
import { CREATE_ACCOUNT } from '../mutations/userMutations';
import styled from 'styled-components/native';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
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
export default function TabTwoScreen() {
	const theme = useColorScheme();
	const [email, setEmail] = useState('');
	const [handle, setHandle] = useState('');
	const [password, setPassword] = useState('');
	const [passwordTwo, setPasswordTwo] = useState();
	const [signup, { loading, error, data }] = useMutation(CREATE_ACCOUNT);

	const handleSignup = () => signup({ variables: { email, handle, password, passwordTwo } });

	console.log(error, loading, data);
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
		if (data && !data.createUser.success) {
			console.log('wtf is this data', data.createUser.message);
			setAlertStatus({
				status: 'danger',
				message: data.createUser.message,
				isVisible: true,
			});
		}
	}, [error, data]);

	return (
		<Container style={{ backgroundColor: Colors[theme].background }}>
			<Inner>
				<Text style={styles.heading}>Welcome to Parallel</Text>
				<Text style={styles.sub_heading}>A minimalistic social media platform</Text>
				<Title style={{ color: Colors[theme].text }}>Signup</Title>
				<InputContainer>
					<Input
						style={{ padding: 5, color: Colors[theme].text }}
						containerStyle={[styles.column, { backgroundColor: Colors[theme].inputBackground }]}
						placeHolderText={'Add your email'}
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
						placeHolderText={'Create a handle'}
						isSecure={false}
						callback={setHandle}
						value={handle}
						label={'Handle'}
						hasLabel={true}
						labelStyle={[labelStyle, { color: Colors[theme].text }]}
						placeHolderColor={'#666'}
					/>
					<Input
						style={{ padding: 5, color: Colors[theme].text }}
						containerStyle={[styles.column, { backgroundColor: Colors[theme].inputBackground }]}
						placeHolderText={'Create a password'}
						isSecure={true}
						callback={setPassword}
						value={password}
						label={'Password'}
						hasLabel={true}
						labelStyle={[labelStyle, { color: Colors[theme].text }]}
						placeHolderColor={'#666'}
					/>
					<Input
						style={{ padding: 5, color: Colors[theme].text }}
						containerStyle={[styles.column, { backgroundColor: Colors[theme].inputBackground }]}
						placeHolderText={'Confirm Password'}
						isSecure={true}
						callback={setPasswordTwo}
						value={passwordTwo}
						label={'Confirm'}
						hasLabel={true}
						labelStyle={[labelStyle, { color: Colors[theme].text }]}
						placeHolderColor={'#666'}
					/>
					{isVisible && <Alert status={status} message={message} />}
					{!loading ? (
						<PrimaryButton
							title={'Signup'}
							callback={handleSignup}
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
}

const styles = StyleSheet.create({
	column: {
		marginTop: 15,
		marginBottom: 15,
		padding: 5,
		borderRadius: 5,
		borderWidth: 0,
	},
	title: {
		marginTop: 20,
	},
	heading: {
		fontSize: 30,
		fontWeight: '700',
		fontFamily: 'Raleway',
	},
	sub_heading: {},
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
