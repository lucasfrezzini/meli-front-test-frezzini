import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ResultsList from '../../components/ResultsList/ResultsList'

import getResults from '../../helpers/getResults'

const Results = () => {
	const { search } = useParams();
	const [results, setResults] = useState({})

	useEffect(() => {
		getResults(search)
			.then(data => setResults(data))
	}, [search])

	return (
		<>
		<div className="container grid grid-cols-12">
			<Breadcrumb categories={results.categories}/>
		</div>
		<section className="container grid grid-cols-12">
			<ResultsList items={results.items} />
		</section>
		</>
	)
}

export default Results
