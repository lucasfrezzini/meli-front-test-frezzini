const getItem = async (id) => {
	const API_URL = 'https://api.mercadolibre.com/items/'
	const URL_ITEM = API_URL + id
	const URL_DESC = URL_ITEM + '/description'
	let URL_CAT = 'https://api.mercadolibre.com/categories/'

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
					"category_id": data.category_id,
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

	URL_CAT = await URL_CAT + dataItem.category_id
	const dataCategoryFromRoot =
		await fetch(URL_CAT)
			.then(res => res.json())
			.then(data => { return data.path_from_root })

	const dataDescription =
		await fetch(URL_DESC)
			.then(res => res.json())
			.then(data => { return data.plain_text })

	return await {
		"author": author,
		"item": {
			...dataItem,
			"category_from_root": dataCategoryFromRoot,
			"description": dataDescription
		}
	}

}

export default getItem
