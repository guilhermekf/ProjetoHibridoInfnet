/**
 * @flow
 */
import React from 'react';
import { Provider } from 'mobx-react/native';
import Store from './Store';
import AppNavigator from './Navigation';

export default () => (
	<Provider store={Store}>
		<AppNavigator />
	</Provider>
);