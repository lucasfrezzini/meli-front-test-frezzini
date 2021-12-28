import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getItem from '../../helpers/getItem'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const Detail = () => {
	const { id } = useParams();
	const [itemDetail, setItemDetail] = useState({})

	useEffect(() => {
		getItem(id)
			.then(data => setItemDetail(data))
	}, [])


	return (
		<>
		<div className="container grid grid-cols-12">
			<Breadcrumb/>
		</div>
		<section className="container grid grid-cols-12">
			<ItemDetail item={itemDetail.item} />
		</section>
		</>
	)
}

export default Detail
