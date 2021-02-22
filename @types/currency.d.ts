interface ICurrency {
	rates:
		| {
				EUR: number;
				JPY: number;
				GBP: number;
		  }
		| {};
	currentCurrency: string;
}
