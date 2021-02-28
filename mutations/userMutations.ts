import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation loginUser($email: String, $password: String, $handle: String) {
		loginUser(email: $email, password: $password, handle: $handle) {
			message
			success
			user {
				email
				avatar
			}
			token
		}
	}
`;
