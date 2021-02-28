import Grid from '@material-ui/core/Grid';
import React from 'react';
import { ProductDetailWrapper } from './styled';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import currencyIcon from '../../constants/currency';
import ProductTab from './product-info-tabs';

interface IProductDetails {
	product: IProduct;
}

const ProductDetail: React.FC<IProductDetails> = ({ product }) => {
	const currencyStore = useSelector((state: IStore) => state.currencyStore);

	const exchangedPrice = product.price * currencyStore.rates[currencyStore.currentCurrency];
	return (
		<>
			<Head>
				<title> {product.title}| MyCommerce</title>
			</Head>
			<ProductDetailWrapper container justify={'center'}>
				<Grid item container md={7} lg={7} xl={7} xs={12} spacing={2}>
					<Grid item md={4} lg={4} sm={4} xl={4} xs={12}>
						<img src={product.image} className={'product-image'} />
					</Grid>
					<Grid item md={8} lg={8} sm={8} xl={8} xs={12}>
						<p className={'product-title'}>{product.title}</p>
						<p className={'product-category'}>
							<span>{product.category}</span>
						</p>
						<p className={'product-description'}>{product.description}</p>
						<p className={'product-price'}>
							{`${currencyIcon[currencyStore.currentCurrency]}`}
							<span>{exchangedPrice.toFixed(2)}</span>
						</p>
						<button className={'product-buy'}>Add to Cart</button>
					</Grid>
				</Grid>
				<Grid item container md={7} lg={7} xl={7} xs={12} spacing={2}>
					<ProductTab />
				</Grid>
			</ProductDetailWrapper>
		</>
	);
};
export default ProductDetail;
