import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const ProductDetailWrapper = styled(Grid)`
	padding: 30px 0;
	p {
		margin: 0;
	}
	.product {
		&-image {
			width: 100%;
		}
		&-title {
			width: 100%;
			color: #3a9dbc;
			font-size: 25px;
			padding: 20px 0;
		}
		&-description {
			padding: 10px 0;
			color: #333;
			font-size: 16px;
			text-align: justify;
			line-height: 25px;
		}
		&-price {
			width: 100%;
			padding: 10px 0;
			font-size: 12px;
			span {
				color: #3a9dbc;
				font-size: 25px;
			}
		}
		&-category {
			width: 100%;
			span {
				border: 1px solid #3a9dbc;
				border-radius: 10px;
				display: inline-block;
				padding: 5px 10px;
				color: #3a9dbc;
				font-size: 12px;
				text-transform: Uppercase;
			}
		}
		&-buy {
			background-color: #3a9dbc;
			border: 1px solid #3a9dbc;
			display: inline-block;
			padding: 10px 15px;
			color: #fff;
			font-size: 16px;
			text-transform: Uppercase;
			cursor: pointer;
			&:hover {
				background-color: #fff;
				color: #3a9dbc;
			}
		}
	}
`;
