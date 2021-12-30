import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ResultsList from '../../components/ResultsList/ResultsList'

import getResults from '../../helpers/getResults'

const Results = () => {
	const { search } = useParams();
	const [results, setResults] = useState({})

	console.log(results)

	useEffect(() => {
		async function getData () {
			await getResults(search)
			.then(data => setResults(data))
		}
		getData()
	}, [search])

	return (
		<>
		<div className="container grid grid-cols-12">
			{ results && <Breadcrumb categories={results.categories?.values[0].path_from_root} /> }
		</div>
		<section className="container grid grid-cols-12">
			{ results && <ResultsList items={results.items} /> }
		</section>
		</>
	)
}

export default Results
