/**
 * @flow
 */

import { IStore } from './IStore';
import { observable } from 'mobx';


const storeObject: IStore = {
};

export default observable(storeObject);
