import styled from 'styled-components';

export const MenuList = styled.ul`
	padding: 0;
	margin: 0;
	border-left: 1px solid #fff;
	li {
		list-style: none;
		display: inline-block;
		padding: 20px 30px;
		background-color: #3a9dbc;
		border-right: 1px solid #fff;

		cursor: pointer;
		color: #fff;
		transition: all 0.5s ease;
		&:hover {
			background: #4baecd;
		}
	}
`;
