import './Breadcrumb.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({categories}) => {

	return (
		<h4 className="Breadcrumb">
		{
		categories &&
		categories.values[0].path_from_root.map((cat, idx) => {
			return (
			<>
			<Link to={`/results/${cat.name}`} key={idx}>{cat.name}</Link>
			<div className="breadcrumb__chevron">
				<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
					<path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
				</svg>
			</div>
			</>
			)
		})
		}
		</h4>
	)
}

export default Breadcrumb
