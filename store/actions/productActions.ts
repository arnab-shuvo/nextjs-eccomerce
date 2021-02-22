import { types } from '../types';
import { Dispatch } from 'redux';
import axios from 'axios';

export const storeProduct = (data: IProduct[]) => ({
	type: types.ADD_PRODUCT,
	payload: data,
});
export const getProduct = () => async (dispatch: Dispatch, getState: () => IStore) => {
	const allPostsData = await axios.get('https://fakestoreapi.com/products');
	dispatch(storeProduct(allPostsData.data));
};
