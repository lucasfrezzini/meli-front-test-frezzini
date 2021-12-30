import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getItem from '../../helpers/getItem'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const Detail = () => {
	const { id } = useParams();
	const [itemDetail, setItemDetail] = useState()

	useEffect(() => {
		async function getData () {
			await getItem(id)
				.then(data => setItemDetail(data))
		}
		getData()
	}, [id])

	return (
		<>
		<div className="container grid grid-cols-12">
			{itemDetail && <Breadcrumb categories={itemDetail.item.path_from_root} detail={true} />}
		</div>
		<section className="container grid grid-cols-12">
			{itemDetail && <ItemDetail item={itemDetail.item} />}
		</section>
		</>
	)
}

export default Detail
