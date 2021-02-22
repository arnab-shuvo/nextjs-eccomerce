import React from 'react';
import styled from 'styled-components';

const SeactionHeader: React.FC = () => {
	return <Header>Our Product</Header>;
};

export default SeactionHeader;

const Header = styled.p`
	margin: 0;
	margin: 50px 0 30px 0;
	text-align: center;
	font-size: 40px;
	color: #888;
	font-weight: bold;
	letter-spacing: 5px;
	position: relative;
	&:after {
		content: '';
		position: absolute;
		width: 100px;
		height: 8px;
		background-color: #3a9dbc;
		left: 0;
		margin: auto;
		right: 0;
		bottom: -10px;
	}
`;
