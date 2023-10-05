const apps = [
    { 
     id: 111,
     name: "cheese sticks",
     color: "black", 
     lovesLasagna: false
     },

    { 
    id: 222,
    name: "fried pickles", 
    color: "orange", 
    lovesLasagna: true
    },

    { 
    id: 333,
    name: "chips n dip", 
    color: "orange", 
    lovesLasagna: false 
    },

  ];

//   console.log(apps)
  
  
  

const getApps = (request, response) => {
    response.send({
      apps
    })
  }


  const getApp = (req, res) => {
    let id = parseInt(req.params.s)
    let foundApp = apps.find(function(app) {
        console.log(app.id)
        return app.id === id
    })

    
    res.send(foundApp)
  }


  module.exports = {
    getApp,
    getApps
  }  