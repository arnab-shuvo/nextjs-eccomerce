import { combineReducers } from 'redux';
import productReducer from './productReducer';
import currencyReducer from './currencyReducer';

const reducers: IStore = {
	productStore: productReducer,
	currencyStore: currencyReducer,
};

export default combineReducers(reducers);
