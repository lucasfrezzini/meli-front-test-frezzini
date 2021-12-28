const getItem = async (id) => {
	const API_URL = 'https://api.mercadolibre.com/items/'
	const URL_ITEM = API_URL + id
	const URL_DESC = URL_ITEM + '/description'

	console.log(URL_DESC)
	const author = {
		"name": "Lucas Nicolás",
		"lastname": "Frezzini"
	}

	const dataItem =
		await fetch(URL_ITEM)
			.then(res => res.json())
			.then(data => {
				return {
					"id": data.id,
					"title": data.title,
					"price": {
						"currency": data.currency_id,
						"amount": data.price,
						"decimals": (data.price % 1),
					},
					"picture": data.pictures[0].url,
					"condition": data.condition,
					"free_shipping": data.shipping.free_shipping,
					"sold_quantity": data.sold_quantity,
				}
			})

	const dataDescription =
		await fetch(URL_DESC)
			.then(res => res.json())
			.then(data => {return data.plain_text})

	return {
		"author": author,
		"item": {
			...dataItem,
			"description": dataDescription
		}
	}

}

export default getItem
