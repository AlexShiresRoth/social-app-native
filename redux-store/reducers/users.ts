import { AUTHENTICATE_USER, AUTHENTICATION_ERROR } from '../reduxTypes';

const initialState = {
	isUserAuthenticated: false,
	userLoading: true,
	loading: true,
	user: null,
	token: null,
	errors: null,
};

export const userReducer = (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case AUTHENTICATE_USER:
			console.log('payload', payload.user);
			return {
				...state,
				user: payload.user,
				isUserAuthenticated: true,
				token: payload.token,
				loading: false,
				userLoading: false,
				errors: null,
			};
		case AUTHENTICATION_ERROR:
			return {
				...state,
				user: null,
				isUserAuthenticated: false,
				loading: false,
				userLoading: false,
				token: null,
				errors: payload,
			};
		default:
			return state;
	}
};
