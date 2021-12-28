import './ResultsList.scss'
import React from 'react'

import Item from '../Item/Item'

const ResultsList = ({items}) => {
	return (
		<div className="Section">
			{
			items &&
			items.map((item, idx) => ( <Item key={idx} item={item} /> ))
			}
		</div>
	)
}

export default ResultsList
