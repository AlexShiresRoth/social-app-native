export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
};

export type BottomTabParamList = {
	Welcome: undefined;
	Login: undefined;
	Signup: undefined;
	Home: undefined;
	Profile: undefined;
};

export type AuthTabParamList = {
	Home: undefined;
	Profile: undefined;
};

export type TabOneParamList = {
	Login: undefined;
};

export type TabTwoParamList = {
	Signup: undefined;
};

export type InputParamList = {
	style: object;
	placeHolderText: string;
	containerStyle: object;
	callback: any;
	value: any;
	isSecure: boolean;
	hasLabel: boolean;
	label: string;
	labelStyle: object;
	placeHolderColor: string;
};

export type PrimaryButtonParams = {
	style: object;
	title: string;
	textStyle: object;
	callback: any;
};

export type AlertParams = {
	status: string;
	message: string;
};

export type TopStackParamList = {
	users: any;
};
