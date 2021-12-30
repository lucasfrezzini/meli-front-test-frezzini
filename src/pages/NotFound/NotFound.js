import React from 'react'

import imgNotFound from '../../assets/images/buscar.png'

const NotFound = () => {
	return (
		<div className="SectionClear">
			<img src={imgNotFound} alt="Empty state" />
			<h2>No hay nada por aquí, prueba buscando otra cosa.</h2>
		</div>
	)
}

export default NotFound
