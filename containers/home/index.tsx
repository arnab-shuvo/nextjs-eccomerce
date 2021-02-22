import { Grid } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import ProductList from './product-list';
import { Banner } from './styled';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>Home | MyCommerce</title>
			</Head>
			<Grid container justify={'center'}>
				<Grid item md={12} xs={12}>
					<Banner background={'/images/b1.jpg'} />
				</Grid>
				<Grid item md={7} xs={10}>
					<ProductList />
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
