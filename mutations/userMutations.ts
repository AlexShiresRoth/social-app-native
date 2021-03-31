import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation loginUser($email: String, $password: String, $handle: String) {
		loginUser(email: $email, password: $password, handle: $handle) {
			message
			success
			user {
				email
				avatar
				handle
			}
			token
		}
	}
`;

export const CREATE_ACCOUNT = gql`
	mutation createUser($email: String, $handle: String, $password: String, $passwordTwo: String, $avatar: String) {
		createUser(email: $email, handle: $handle, password: $password, passwordTwo: $passwordTwo, avatar: $avatar) {
			message
			success
			user {
				email
				avatar
				handle
			}
			token
		}
	}
`;
