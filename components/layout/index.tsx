import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { getExchangeRate } from '../../store/actions/currencyAction';
import Link from 'next/link';
import CurrecySelector from './currecy-selector';
import { Logo, MenuWrapper, Footer, SelectorWrapper } from './styled';
import Head from 'next/head';
import Menu from '../menu';

const Layout: React.FC = ({ children }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getExchangeRate());
	}, []);
	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap' rel='stylesheet' />
			</Head>
			<Grid container justify={'center'}>
				<Grid container item md={12} sm={12} xs={12} justify={'center'}>
					<Grid container item md={7} lg={7} xl={7} xs={12} alignItems={'center'} spacing={3}>
						<Grid item sm={6} md={6} lg={6} xl={6} xs={12}>
							<Link href={`/`}>
								<Logo>My Commerce</Logo>
							</Link>
						</Grid>
						<Grid item sm={6} md={6} lg={6} xl={6} xs={12}>
							<SelectorWrapper>
								<CurrecySelector />
							</SelectorWrapper>
						</Grid>
					</Grid>
					<MenuWrapper item md={12} lg={12} xl={12} xs={12} container justify={'center'}>
						<Grid item md={7} lg={7} xl={7} xs={12}>
							<Menu />
						</Grid>
					</MenuWrapper>
				</Grid>
				<Grid item md={12} sm={12} xs={12}>
					{children}
				</Grid>
				<Footer container item md={12} sm={12} xs={12} justify={'center'}>
					<Grid container item md={7} lg={7} xl={7} xs={12}>
						<Grid item md={3} sm={3} xs={12}>
							<ul>
								<li>
									<a href='#'>Home</a>
								</li>
								<li>
									<a href='#'>About Us</a>
								</li>
								<li>
									<a href='#'>Contact Us</a>
								</li>
								<li>
									<a href='#'>CSR</a>
								</li>
							</ul>
						</Grid>
						<Grid item md={6} sm={6} xs={12}>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum eget leo eu volutpat. Cras eu mi augue. Phasellus ut lacinia velit. Proin fringilla faucibus commodo. Integer id tellus a odio ultrices porttitor ac in diam. Etiam dui lorem, mattis ut mauris in, dapibus porta nulla. Praesent accumsan risus sit amet urna finibus efficitur.</p>
						</Grid>
						<Grid item md={3} sm={3} xs={12}>
							<ul className={'ending-list'}>
								<li>
									<a href='#'>Follow Us</a>
								</li>
								<li>
									<a href='#'>Track Order</a>
								</li>
								<li>
									<a href='#'>Suggestion</a>
								</li>
								<li>
									<a href='#'>Customer Care</a>
								</li>
							</ul>
						</Grid>
					</Grid>
				</Footer>
			</Grid>
		</>
	);
};

export default Layout;
