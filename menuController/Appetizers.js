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

module.exports = {
	getAppetizers,
	getAppetizerById,
}
