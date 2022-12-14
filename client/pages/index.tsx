import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

import Slider from '../app/components/ui/slider/Slider'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import { fetchValueLoading } from '../store/redux/reducers/actionCreator'

const Home: NextPage = () => {
	const dispatch = useDispatch()

	const { values, error } = useTypedSelector((state) => state.value)

	React.useEffect(() => {
		dispatch(fetchValueLoading())
		setInterval(() => {
			dispatch(fetchValueLoading())
		}, 60000)
	}, [dispatch])

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			<Head>
				<title>Bitcoin App</title>
				<meta name="description" content="Generated by create bitcoin app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				{values ? (
					<Slider slides={values.bpi} />
				) : (
					<div className="loading">
						<h1>Loading...</h1>
					</div>
				)}
			</>
		</div>
	)
}

export default Home
