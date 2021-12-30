import React from 'react'

import imgEmpty from '../../assets/images/cart.png'

const Empty = () => {
	return (
		<section className="SectionClear">
			<img src={imgEmpty} alt="Empty state" />
			<h2>¿Por qué no buscás algo para comprar?</h2>
		</section>
	)
}

export default Empty
