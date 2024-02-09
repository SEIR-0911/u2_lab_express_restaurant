const appetizers = [
	{
		name: 'Buffalo Chicken Wings',
		price: 14,
		calories: 450,
		imageURL: 'https://example.com/buffalo_chicken_wings.jpg',
		glutenFree: true,
	},
	{
		name: 'Bacon Wrapped Stuffed Jalapeños',
		price: 11,
		calories: 220,
		imageURL:
			'https://cantstayoutofthekitchen.com/wp-content/uploads/Maple-Bacon-Stuffed-Jalapenos-4aaeb.jpg',
		glutenFree: true,
	},
	{
		name: 'Mini Sliders',
		price: 12,
		calories: 280,
		imageURL:
			'https://backyard.exmark.com/wp-content/uploads/2020/01/iStock-155358719-3840x2555.jpg',
		glutenFree: false,
	},
	{
		name: 'Spring Rolls',
		price: 8,
		calories: 150,
		imageURL:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfNqINWTbpDP0HPeZGrEgO2MUolmWKImbPw&usqp=CAU',
		glutenFree: false,
	},
]

const getAppetizers = (req, res) => {
	res.send(appetizers)
}

const getAppetizerById = (req, res) => {
	res.send(appetizers[req.params.id])
}

const filterAppetizers = (req, res) => {
	try {
		// Destructure min/max price as query parameters to check price range
		const { minimumPrice, maximumPrice } = req.query

		// Filter through and return arr of elems that pass the test
		let filterAppetizers = appetizers.filter((appetizer) => {
			return (
				// Boolean evals to true to check if min price provided or price >= min price
				(!minimumPrice || appetizer.price >= parseFloat(minimumPrice)) &&
				// Check to see if max price provided or price <= max max price
				(!maximumPrice || appetizer.price <= parseFloat(maximumPrice))
			)
		})

		res.send(filterAppetizers)
	} catch (error) {
		res.status(404).send('Sorry, we cannot find that!')
	}
}

module.exports = {
	getAppetizers,
	getAppetizerById,
	filterAppetizers,
}
