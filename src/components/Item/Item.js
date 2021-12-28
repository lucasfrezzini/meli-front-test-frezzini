import './Item.scss'
import React from 'react'
import { Link } from 'react-router-dom'

import iconFreeShiping from '../../assets/images/ic_shipping.png'

const Item = ({item}) => {
	const {
		id,
		picture,
		title,
		price,
		address_state,
		free_shipping
	} = item;

	return (
		<article className="Item">
			<picture>
				<img src={picture} alt={title}/>
			</picture>
			<section className="Item__info">
				<header>
					<p className="price">$ {price.amount} {free_shipping && <span className="free_shiping"><img src={iconFreeShiping} alt="Free Shiping" /></span>}</p>
					<p className="city">{address_state}</p>
				</header>
				<h2><Link to={`/items/${id}`} >{title}</Link></h2>
			</section>
		</article>
	)
}

export default Item
