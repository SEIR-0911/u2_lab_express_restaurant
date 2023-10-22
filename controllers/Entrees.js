const entrees = [
    {
      name: "Grilled Salmon",
      description: "Fresh grilled salmon with lemon butter sauce and seasonal vegetables.",
      price: "$18",
    },
    {
      name: "Ribeye Steak",
      description: "Juicy ribeye steak cooked to perfection and served with garlic mashed potatoes.",
      price: "$20",
    },
    {
      name: "Vegetable Stir-Fry",
      description: "A medley of fresh vegetables stir-fried with a savory sauce served over rice.",
      price: "$22",
    },
  ];
  
  const getEntrees = (req, res) => {
    res.json(entrees);
  };
  
  const getEntree = (req, res) => {
    res.json(entrees[req.params.id]);
  };

  
  module.exports = {
    getEntrees,
    getEntree,
    
  };
  