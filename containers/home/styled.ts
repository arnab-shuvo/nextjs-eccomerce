import styled from 'styled-components';

export const Banner = styled.div`
	height: 60vh;
	width: 100%;
	background-color: #cdcdcd;
	background-image: url('${(props) => props.background}');
	background-repeat: no-repeat;
	background-size: cover;
`;
