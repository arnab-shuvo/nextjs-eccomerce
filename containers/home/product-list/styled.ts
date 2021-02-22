import styled from 'styled-components';

interface BackgroundImage {
	background: string;
}

export const ProductWrapper = styled.div`
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		box-shadow: 0px 0px 5px 5px #f1f1f1;
	}
	padding: 15px;
	border: 1px solid #3a9dbc;
	height: 100%;
	position: relative;
	.product-categoy {
		position: absolute;
		width: auto;
		background: #3a9dbc;
		text-align: center;
		top: 8px;
		left: 0;
		padding: 5px;
		p {
			margin: 0;
			color: #fff;
			text-transform: uppercase;
		}
	}
	.product-title {
		font-size: 16px;
		color: #888;
		text-transform: Uppercase;
		text-align: justify;
	}
`;

export const ProductImage = styled.div`
	background-image: url(${(props: BackgroundImage) => props.background});
	background-size: contain;
	height: 250px;
	width: 100%;
	background-repeat: no-repeat;
	background-position: center;
`;
