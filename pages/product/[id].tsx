import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../store/actions/productActions';
import ProductDetail from '../../containers/product';

interface IProductPage {
	id: string;
}

const Product: React.FC<IProductPage> = ({ id }) => {
	const { products } = useSelector((state: IStore) => state.productStore);
	const [product, setProduct] = useState<IProduct>();
	const dispatch = useDispatch();
	useEffect(() => {
		if (!products.length) {
			dispatch(getProduct());
		} else if (!product) {
			const currentProduct = products.find((product: IProduct) => product.id === parseInt(id));
			setProduct(currentProduct);
		}
	}, [products]);

	return <>{product && <ProductDetail product={product} />}</>;
};

export default Product;

export async function getStaticProps(context) {
	const id = context.params.id;
	const data = {
		props: {
			id,
		},
	};

	return data;
}
export async function getStaticPaths(context) {
	const allPostsData = await axios.get('https://fakestoreapi.com/products');
	const pathData = allPostsData.data.map((product: IProduct) => {
		return {
			params: {
				id: product.id.toString(),
			},
		};
	});
	return {
		paths: pathData,
		fallback: false,
	};
}
