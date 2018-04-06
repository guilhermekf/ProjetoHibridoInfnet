/**
 * @flow
 */

import { NavigationScreenProps } from 'react-navigation';
import { IStore } from './IStore';

/**
 * Propriedades do componente que possuem a store.
 */
export interface IAppProps extends NavigationScreenProps {
	store: IStore;
}

/**
 * Propriedades basicas dos estados dos componentes.
 */
export interface IAppState {
	loading: boolean;
}
