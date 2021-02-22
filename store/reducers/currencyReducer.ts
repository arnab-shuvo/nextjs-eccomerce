import { types } from '../types';

const initialCurrencyState: ICurrency = {
	rates: {},
	currentCurrency: 'USD',
};

// CURRENCY REDUCER
const currencyReducer = (state = initialCurrencyState, { type, payload }) => {
	switch (type) {
		case types.ADD_CURRENCY:
			return { ...state, ...payload };
		case types.CHANGE_CURRENCY:
			return { ...state, currentCurrency: payload };
		default:
			return state;
	}
};

export default currencyReducer;
