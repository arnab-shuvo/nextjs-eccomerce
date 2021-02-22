import React from 'react';
import { ProductWrapper, ProductImage } from './styled';
import Link from 'next/link';

interface ISoloProduct {
	productInfo: IProduct;
}

const Product: React.FC<ISoloProduct> = ({ productInfo }) => {
	const { id, category, description, image, price, title } = productInfo;
	return (
		<Link href={`/product/${id}`}>
			<ProductWrapper>
				<div className={'product-categoy'}>
					<p>{category}</p>
				</div>
				<ProductImage background={image} />
				<div className={'product-title'}>
					<p>{title}</p>
				</div>
			</ProductWrapper>
		</Link>
	);
};

export default Product;
