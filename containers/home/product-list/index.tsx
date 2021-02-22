import React from 'react';
import { useSelector } from 'react-redux';
import Product from './single-product';
import Grid from '@material-ui/core/Grid';
import SeactionHeader from '../../../components/section-header';

const ProductList: React.FC = () => {
	const { products } = useSelector((state: IStore) => state.productStore);

	return (
		<Grid container spacing={2}>
			<Grid item md={12} sm={12} lg={12} xl={12} xs={12}>
				<SeactionHeader>Our Products</SeactionHeader>
			</Grid>
			{products.map((product: IProduct, index: number) => {
				return (
					<Grid key={index} item md={4} sm={6} lg={3} xl={3} xs={12}>
						<Product productInfo={product} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ProductList;
