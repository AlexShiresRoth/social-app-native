import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { connect, RootStateOrAny } from 'react-redux';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { AuthTabParamList, BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = function ({ users: { isUserAuthenticated } }: any) {
	const colorScheme = useColorScheme();
	console.log('comin from the nav', isUserAuthenticated);
	return (
		<BottomTab.Navigator initialRouteName="Welcome" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
			{!isUserAuthenticated ? (
				<>
					<BottomTab.Screen
						name="Login"
						component={TabOneNavigator}
						options={{
							tabBarIcon: ({ color }) => <TabBarIcon name="log-in" color={color} />,
						}}
					/>
					<BottomTab.Screen
						name="Signup"
						component={TabTwoNavigator}
						options={{
							tabBarIcon: ({ color }) => <TabBarIcon name="person-add" color={color} />,
						}}
					/>
				</>
			) : (
				<>
					<BottomTab.Screen name="Home" component={HomeScreen} />
					<BottomTab.Screen name="Profile" component={ProfileScreen} />
				</>
			)}
		</BottomTab.Navigator>
	);
};

const AuthTabStack = createStackNavigator<AuthTabParamList>();

function AuthNavBar() {
	const theme = useColorScheme();
	<AuthTabStack.Navigator>
		<AuthTabStack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Home' }} />
	</AuthTabStack.Navigator>;
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen name="Login" component={TabOneScreen} options={{ headerTitle: 'Login' }} />
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen name="Signup" component={TabTwoScreen} options={{ headerTitle: 'Signup' }} />
		</TabTwoStack.Navigator>
	);
}

const mapStateToProps = (state: RootStateOrAny) => ({
	users: state.users,
});

export default connect(mapStateToProps, {})(BottomTabNavigator);
