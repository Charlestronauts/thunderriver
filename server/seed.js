
Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'chuck',
      email: 'chuck@email.com',
      password: 'pass'
    })

    Accounts.createUser({
      username: 'norris',
      email: 'norris@email.com',
      password: 'pass'
    })
  }

  var chuckId = Meteor.users.findOne({username: 'chuck'})._id
  var norrisId = Meteor.users.findOne({username: 'norris'})._id

  if (Units.find().count() === 0) {
    Units.insert({
      _id: "u1",
      userId: chuckId,
      name: 'SqFt'
    })

    Units.insert({
      _id: "u2",
      userId: chuckId,
      name: 'Inches'
    })

    Units.insert({
      _id: "u3",
      userId: chuckId,
      name: 'Meters'
    })

    Units.insert({
      _id: "u4",
      userId: chuckId,
      name: 'Liters'
    })

    Units.insert({
      _id: "u5",
      userId: norrisId,
      name: 'Quarts'
    })

    Units.insert({
      _id: "u6",
      userId: norrisId,
      name: 'Gallons'
    })
  }

  if (Materials.find().count() === 0) {
    Materials.insert({
      _id: "m1",
      userId: chuckId,
      name: "Punkin Fabric",
      cost: 123,
      quantity: 3,
      unitId: "u1",
      image: "http://www.eonline.com/eol_images/Entire_Site/20080715/300.norris.chuck.071508.jpg"
    })

    Materials.insert({
      _id: "m2",
      userId: chuckId,
      name: "Chuck Norris",
      cost: 8140.12,
      quantity: 0,
      unitId: "u2",
      image: "http://www.cameralook.it/web/wp-content/uploads/2015/03/chuck-norris-600.jpg"
    })

    Materials.insert({
      _id: "m3",
      userId: chuckId,
      name: "String",
      cost: 7135.23,
      quantity: 100,
      unitId: "u3",
      image: "http://i.sdpnoticias.com/notas/2015/01/19/180329_chuck.jpg"
    })

    Materials.insert({
      _id: "m4",
      userId: norrisId,
      name: "Diamonds",
      cost: 543.23,
      quantity: 4732,
      unitId: "u4",
      image: "http://blog.rismedia.com/wp-content/uploads/2015/01/Chuck-Norris-1995-kjdlaksd.jpg"
    })

    Materials.insert({
      _id: "m5",
      userId: norrisId,
      name: "Rubys",
      cost: 23.5,
      quantity: 2345,
      unitId: "u4",
      image: "http://nickadamsinamerica.com/wp-content/uploads/2014/07/chucknorris2.jpg"
    })
  }

  if (Projects.find().count() === 0) {
    Projects.insert({
      _id: "p1",
      userId: chuckId,
      name: "Fancy Necklace",
      description: "I lovez the necklaces, they are kute!!",
      timeEstimate: 5,
      image: "http://images4.fanpop.com/image/photos/14700000/Monkeys-monkeys-14750729-1600-1200.jpg",
      difficulty: 1,
      materialsUsed: {
        "m1": 1,
        "m2": 1,
        "m3": 1,
        "m4": 1
      }
    })

    Projects.insert({
      _id: "p2",
      userId: chuckId,
      name: "Punkin Pillow",
      description: "",
      timeEstimate: 4,
      image: "http://www.guygray.org/wp-content/uploads/2013/08/animals-monkeys-HD-Wallpapers.jpg",
      difficulty: 1,
      materialsUsed: {
        "m2": 1,
        "m5": 1
      }
    })

    Projects.insert({
      _id: "p3",
      userId: chuckId,
      name: "Pizza",
      description: "I like pizza better than Jimmy Johns, and so do you.",
      timeEstimate: 1,
      image: "",
      difficulty: 1,
      materialsUsed: {
        "m1": 1,
        "m5": 1
      }
    })

    Projects.insert({
      _id: "p4",
      userId: chuckId,
      name: "Chocolate Looking Couch",
      description: "A couch that looks like chocolate, but don't try to eat it, it is not made of chocolate.",
      timeEstimate: 1,
      image: "http://images4.fanpop.com/image/photos/14700000/Lemurs-monkeys-14750770-1600-1200.jpg",
      difficulty: 3,
      materialsUsed: {
        "m5": 1
      }
    })

    Projects.insert({
      _id: "p5",
      userId: norrisId,
      name: "Earings",
      description: "Those things you wear on your fingers",
      timeEstimate: 7,
      image: "http://www.catherinenicole.com/wp-content/uploads/2011/05/earrings-angela-w1.jpg",
      difficulty: 2,
      // Empty material ids
      materialsUsed: {}
    })

    Projects.insert({
      _id: "p6",
      userId: norrisId,
      name: "Robot Chicken",
      description: "Yeah, duh.",
      timeEstimate: 234,
      image: "http://images.fanpop.com/images/image_uploads/Robot-Chicken-robot-chicken-153706_1600_1200.jpg",
      difficulty: 3,
      // No material ids
    })
  }

  if (Settings.find().count() === 0) {

    Settings.insert({
      userId: chuckId,
      markupPercent: 50,
      minimumProfit: 3.50,
      rounding: 1.0,
      realName: "Chucky the Norris",
      storeName: "Chucky Doll Store",
    })

    Settings.insert({
      userId: norrisId,
      markupPercent: 10,
      minimumProfit: 1,
      rounding: 0.5,
      realName: "Chuck Norris",
      storeName: "Just Martial Artz",
    })


  }

});
