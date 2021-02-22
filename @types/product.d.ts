interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}
interface IProductState {
	products: IProduct[] | [];
}
