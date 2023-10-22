const appetizers = [
    {
      name: "Garlic Shrimp",
      description: "Sauteed shrimp in a garlic and herb butter sauce.",
      price: "$14",
    },
    {
      name: "Stuffed Mushrooms",
      description: "Mushroom caps stuffed with creamy cheese and herbs.",
      price: "$12",
    },
    {
      name: "Crispy Calamari",
      description: "Lightly breaded and fried calamari served with marinara sauce.",
      price: "$16",
    },
  ];
  
  const getApps = (req, res) => {
    res.json(appetizers);
  };
  
  const getApp = (req, res) => {
    res.json(appetizers[req.params.id]);
  };
  
 
  
  module.exports = {
    getApps,
    getApp,
  
  };
  