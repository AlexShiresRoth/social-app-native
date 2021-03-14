import { AUTHENTICATE_USER, AUTHENTICATION_ERROR } from '../reduxTypes';

export const loginUser = (data: object) => async (dispatch: any) => {
	try {
	} catch (error) {
		console.error(error);
		dispatch({
			type: AUTHENTICATION_ERROR,
			payload: error,
		});
	}
};
