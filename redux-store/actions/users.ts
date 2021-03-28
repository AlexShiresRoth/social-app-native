import { AUTHENTICATE_USER, AUTHENTICATION_ERROR } from '../reduxTypes';

export const loginUser = (data: any) => async (dispatch: any) => {
	try {
		dispatch({
			type: AUTHENTICATE_USER,
			payload: data,
		});
	} catch (error) {
		console.error(error);
		dispatch({
			type: AUTHENTICATION_ERROR,
			payload: error,
		});
	}
};
