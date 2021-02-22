import { types } from '../types';

const initialProductState: IProductState = {
	products: [],
};

// PRODUCT REDUCER
const productReducer = (state = initialProductState, { type, payload }) => {
	switch (type) {
		case types.ADD_PRODUCT:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export default productReducer;
