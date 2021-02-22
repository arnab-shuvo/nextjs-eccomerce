import { types } from '../types';
import { Dispatch } from 'redux';
import axios from 'axios';

export const storeRate = (data: IProduct[]) => ({
	type: types.ADD_CURRENCY,
	payload: data,
});
export const getExchangeRate = () => async (dispatch: Dispatch, getState: () => IStore) => {
	const { currencyStore } = getState();
	if (!Object.keys(currencyStore.rates).length) {
		const { data } = await axios.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY');
		data.rates['USD'] = 1;
		dispatch(storeRate(data));
	}
};
export const setCurrency = (data: string) => ({
	type: types.CHANGE_CURRENCY,
	payload: data,
});
