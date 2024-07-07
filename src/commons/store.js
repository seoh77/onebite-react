// store.js : reducer로 global store을 만들 redux store

import { createStore } from 'redux';
import { reducer } from './reducer';

const store = createStore(reducer);

export default store;
