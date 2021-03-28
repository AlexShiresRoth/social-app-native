import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './redux-store/store';
import { serverUrl } from './reusable/serverUrl';

import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
	uri: serverUrl + '/graphql',
	credentials: 'same-origin',
});

const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = await AsyncStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
		Raleway: require('./assets/fonts/Raleway-Regular.ttf'),
	});

	if (!isLoadingComplete && !loaded) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<ApolloProvider client={client}>
					<Provider store={store}>
						<Navigation colorScheme={colorScheme} />
						<StatusBar />
					</Provider>
				</ApolloProvider>
			</SafeAreaProvider>
		);
	}
}
