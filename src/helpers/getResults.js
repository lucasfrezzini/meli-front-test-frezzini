const getResults = async (query) => {
	const API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q='
	const URL = API_URL + query

	const author = {
		"name": "Lucas Nicolás",
		"lastname": "Frezzini"
	}

	const data =
		await fetch(URL)
			.then(res => res.json())
			.then(data => {
				const categories = data.filters[0]
				let items = []
				data.results.map(item => {
					items.push({
						"id": item.id,
						"title": item.title,
						"price": {
							"currency": item.currency_id,
							"amount": item.prices.prices[0].amount,
							"decimals": (item.prices.prices[0].amount % 1).toFixed(2)
						},
						"address_state": item.address.state_name,
						"picture": item.thumbnail,
						"condition": item.condition,
						"free_shipping": item.shipping.free_shipping
					})
				})

				return {
					"author": author,
					"categories": categories,
					"items": items.slice(0, 4)
				}
			})

	return data

}

export default getResults
