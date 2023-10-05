const ents = [
    { name: "steak",
     color: "black", 
     lovesLasagna: false
     },

    { name: "sammy", 
    color: "orange", 
    lovesLasagna: true
    },

    { name: "Pizza", 
    color: "orange", 
    lovesLasagna: false 
    },

  ];

//   console.log(cats)
  
  
  

const getEnts = (request, response) => {
    response.send({
      cats
    })
  }


  const getEnt = (req, res) => {
    res.send(ents[req.params.id])
  }


  module.exports = {
    getEnts,getEnt
  }  