const entrees = [
	{
		name: 'Grilled Salmon',
		description:
			'Savory piece of grilled salmon with a simple soy sauce and brown sugar marinade',
		price: 24,
		calories: 520,
		imageURL:
			'https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2.jpg',
	},
	{
		name: 'Ribeye Steak',
		description:
			'12 oz ribeye steak grilled perfectly to medium rare, served with mashed potatoes and asparagus.',
		price: 32,
		calories: 950,
		imageURL:
			'https://www.177milkstreet.com/assets/site/Recipes/Rib-Eye-Steaks-Rosemary-Pomegranate-Molasses.jpg',
	},
	{
		name: 'Chicken Alfredo Pasta',
		description:
			'Penne pasta tossed in a creamy, dreamy pan sauce made from butter and Parmigiano-Reggiano cheese',
		price: 21,
		calories: 1200,
		imageURL:
			'https://hips.hearstapps.com/hmg-prod/images/chicken-alfredo-index-64ee1026c82a9.jpg?crop=0.9994472084024323xw:1xh;center,top&resize=1200:*',
	},
	{
		name: 'Margherita Pizza',
		description:
			'Classic Margherita pizza with fresh mozzarella, tomatoes, basil, and a drizzle of olive oil on a thin crust.',
		price: 20,
		calories: 700,
		imageURL:
			'https://cookieandkate.com/images/2021/07/classic-margherita-pizza.jpg',
	},
	{
		name: 'Pan-Seared Scallops',
		description: 'Pan-seared scallops with a lemon butter sauce.',
		price: 28,
		calories: 535,
		imageURL: 'https://example.com/pan_seared_scallops.jpg',
	},
]

const getEntrees = (req, res) => {
	res.send(entrees)
}

const getEntreesById = (req, res) => {
	res.send(entrees[req.params.id])
}

module.exports = {
	getEntrees,
	getEntreesById,
}
