const dess = [
    { name: "Flan",
     color: "black", 
     lovesLasagna: false
     },

    { name: "Cheese cake", 
    color: "orange", 
    lovesLasagna: true
    },

    { name: "ice cream", 
    color: "orange", 
    lovesLasagna: false 
    },

  ];

//   console.log(cats)
  
  
  

const getdesss = (request, response) => {
    response.send({
      dess
    })
  }


  const getdess = (req, res) => {
    res.send(dess[req.params.id])
  }


  module.exports = {
    getdess,getdesss
  }  