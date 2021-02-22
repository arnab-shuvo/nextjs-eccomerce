import React, { useEffect } from 'react';
import Home from '../containers/home';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { storeProduct } from '../store/actions/productActions';

interface IHome {
	products: IProduct[];
}

const Index: React.FC<IHome> = ({ products }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(storeProduct(products));
	}, [products]);
	return <Home />;
};

export default Index;

export async function getStaticProps() {
	const allPostsData = await axios.get('https://fakestoreapi.com/products');
	const data = {
		props: {
			products: allPostsData.data,
		},
	};

	return data;
}
