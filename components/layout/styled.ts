import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

export const Logo = styled.p`
	color: #3a9dbc;
	font-family: 'Great Vibes', cursive;
	font-size: 40px;
	margin: 5px 0;
	cursor: pointer;
	@media screen and (max-width: 767px) {
		text-align: center;
	}
`;
export const SelectorWrapper = styled.div`
	text-align: right;
	@media screen and (max-width: 767px) {
		text-align: center;
	}
`;
export const StyledSelect = styled(Select)`
	.MuiSelect-select.MuiSelect-select {
		width: 100px;
		text-align: center;
		background: white;
		color: #3a9dbc;
		border-bottom: 1px solid #cdcdcd;
	}
	&:before {
		border-bottom: 0px;
	}
	&:after {
		border-bottom: 0px;
	}
`;

export const MenuWrapper = styled(Grid)`
	background-color: #3a9dbc;
`;
export const Footer = styled(Grid)`
	background-color: #3a9dbc;
	padding: 40px 0;
	margin-top: 40px;
	p {
		color: #fff;
		text-align: justify;
	}
	ul {
		padding: 0;
		&.ending-list {
			text-align: right;
		}

		li {
			list-style: none;
			padding: 5px 0;
			a {
				color: #fff;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`;
