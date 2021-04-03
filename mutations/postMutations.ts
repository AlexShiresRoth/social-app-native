import { gql } from '@apollo/client';

export const CREATE_POST = gql`
	mutation createPost($email: String, $content: String, $avatar: String, $author: String) {
		createPost(email: $email, avatar: $avatar, content: $content) {
			message
			success
			post {
				content
				date
				author
				avatar
			}
		}
	}
`;
