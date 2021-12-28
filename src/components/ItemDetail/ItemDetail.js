import './ItemDetail.scss'
import React from 'react'

import pictureDetail from '../../assets/images/pictureDetail.jpeg'

const ItemDetail = ({item}) => {
	console.log(item);

	return (
		<>
		{item &&
			<div className="ItemDetail Section grid grid-cols-10">
				<article>
					<picture>
						<img src={item.picture} alt={item.title}/>
					</picture>
					<header>
						<h3>Descripción del producto</h3>
					</header>
					<p className="description">{item.description}</p>
				</article>
				<aside className="ItemDetail__info">
					<h4><span className="condition">{item.condition}</span> - <span className="sold_quantity">{item.sold_quantity} vendidos</span></h4>
					<h2>{item.title}</h2>
					<h3>$ {item.price.amount}</h3>
					<button className="btn__buy">Comprar</button>
				</aside>
			</div>}
		</>

	)
}

export default ItemDetail
