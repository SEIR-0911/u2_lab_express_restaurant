const desserts = [
	{
		name: 'Strawberry Cheesecake',
		price: 15,
		calories: 650,
		imageURL:
			'https://sugargeekshow.com/wp-content/uploads/2022/12/cherry_cheesecake_featured-4-of-6-copy.jpg',
	},
	{
		name: 'Sundae',
		price: 11,
		calories: 500,
		imageURL:
			'https://i3.wp.com/whatagirleats.com/wp-content/uploads/2023/07/top-shot-tin-roof.jpg',
	},
	{
		name: 'Apple Pie',
		price: 7,
		calories: 300,
		imageURL:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvaAOSMNJxswjbaQrqyyvPX3PlID_FT0ZUWg&usqp=CAU',
	},
	{
		name: 'Creme Brulee',
		price: 10,
		calories: 550,
		imageURL:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmil5MCNhPL45uTkKFhk8lwISm2sNmcxUZog&usqp=CAU',
	},
	{
		name: 'Molten Lava Cake',
		price: 14,
		calories: 600,
		imageURL:
			'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg',
	},
]

const getDesserts = (req, res) => {
	res.send(desserts)
}

const getDessertsById = (req, res) => {
	res.send(desserts[req.params.id])
}

const filterDesserts = (req, res) => {
	try {
		const { minimumPrice, maximumPrice } = req.query

		let filterDesserts = desserts.filter((dessert) => {
			return (
				(!minimumPrice || dessert.price >= parseFloat(minimumPrice)) &&
				(!maximumPrice || dessert.price <= parseFloat(maximumPrice))
			)
		})

		res.send(filterDesserts)
	} catch (error) {
		res.status(404).send('Sorry, we cannot find that!')
	}
}

module.exports = {
	getDesserts,
	getDessertsById,
	filterDesserts,
}
