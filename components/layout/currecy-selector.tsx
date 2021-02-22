import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { setCurrency } from '../../store/actions/currencyAction';
import { StyledSelect } from './styled';

const CurrecySelector: React.FC = () => {
	const dispatch = useDispatch();
	const [currency, setCurrentCurrency] = useState<string>('USD');
	const changeCurrency = (event: React.ChangeEvent<{ value: unknown }>) => {
		if (['EUR', 'JPY', 'GBP', 'USD'].includes(event.target.value.toString())) {
			setCurrentCurrency(event.target.value.toString());
			const selectedCurrency = event.target.value.toString();
			dispatch(setCurrency(selectedCurrency));
		}
	};
	return (
		<StyledSelect labelId='demo-simple-select-label' id='demo-simple-select' value={currency} onChange={changeCurrency}>
			<MenuItem value={'USD'}>USD</MenuItem>
			<MenuItem value={'GBP'}>GBP</MenuItem>
			<MenuItem value={'JPY'}>JPY</MenuItem>
			<MenuItem value={'EUR'}>EUR</MenuItem>
		</StyledSelect>
	);
};

export default CurrecySelector;
