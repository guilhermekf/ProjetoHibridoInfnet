/**
 * @flow
 */

import { SplashScreen, SearchScreen, DetailScreen } from './screens';
import { observer, inject } from 'mobx-react';
import { StackNavigator } from 'react-navigation';


const RoutesApp = {
	Splash: {
		screen: inject('store')(observer(SplashScreen))
    },
    Search: {
		screen: inject('store')(observer(SearchScreen))
    },
    Detail: {
		screen: inject('store')(observer(DetailScreen))
	}
};

const NavigationOptions = {
	headerMode: 'none',
	header: null,
	navigationOptions: {
		gesturesEnabled: false
    },
    initialRouteName: 'Splash'
};

/**
 * Cria e stack de navegacao
 */
const AppNavigator = StackNavigator(RoutesApp, NavigationOptions);

export default AppNavigator;
