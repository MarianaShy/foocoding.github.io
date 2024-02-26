	const getCounter = (init = 0) => {
		let counter = init
		return () => ++counter

	}

	export default getCounter