if (Units.find().count() === 0) {
  Units.add({name: 'SqFt'})
  Units.add({name: 'Inches'})
  Units.add({name: 'Meters'})
  Units.add({name: 'Liters'})
  Units.add({name: 'Quarts'})
  Units.add({name: 'Gallons'})
}

if (Materials.find().count() === 0) {
  Materials.add({
    _ids: "m1",
    name: "Punkin Fabric",
    cost: 123,
    quantity: 3,
    image: "http://www.eonline.com/eol_images/Entire_Site/20080715/300.norris.chuck.071508.jpg"
  })

  Materials.add({
    _ids: "m2",
    name: "Chuck Norris",
    cost: 8140.12,
    quantity: 0,
    image: "http://www.cameralook.it/web/wp-content/uploads/2015/03/chuck-norris-600.jpg"
  })

  Materials.add({
    _ids: "m3",
    name: "String",
    cost: 7135.23,
    quantity: 100,
    image: "http://i.sdpnoticias.com/notas/2015/01/19/180329_chuck.jpg"
  })

  Materials.add({
    _ids: "m4",
    name: "Diamonds",
    cost: 543.23,
    quantity: 4732,
    image: "http://blog.rismedia.com/wp-content/uploads/2015/01/Chuck-Norris-1995-kjdlaksd.jpg"
  })

  Materials.add({
    _ids: "m5",
    name: "Rubys",
    cost: 23.5,
    quantity: 2345,
    image: "http://nickadamsinamerica.com/wp-content/uploads/2014/07/chucknorris2.jpg"
  })
}

if (Projects.find().count() === 0) {
  Projects.add({
    _ids: "p1",
    name: "Fancy Necklace",
    description: "I lovez the necklaces, they are kute!!",
    timeEstimate: 5,
    image: "http://images4.fanpop.com/image/photos/14700000/Monkeys-monkeys-14750729-1600-1200.jpg",
    difficulty: 1
  })

  Projects.add({
    _ids: "p2",
    name: "Punkin Pillow",
    description: "",
    timeEstimate: 4,
    image: "http://www.guygray.org/wp-content/uploads/2013/08/animals-monkeys-HD-Wallpapers.jpg",
    difficulty: 1
  })

  Projects.add({
    _ids: "p3",
    name: "Pizza",
    description: "I like pizza better than Jimmy Johns, and so do you.",
    timeEstimate: 1,
    image: "",
    difficulty: 1
  })

  Projects.add({
    _ids: "p4",
    name: "Chocolate Looking Couch",
    description: "A couch that looks like chocolate, but don't try to eat it, it is not made of chocolate.",
    timeEstimate: 1,
    image: "http://images4.fanpop.com/image/photos/14700000/Lemurs-monkeys-14750770-1600-1200.jpg",
    difficulty: 3
  })

  Projects.add({
    _ids: "p5",
    name: "Earings",
    description: "Those things you wear on your fingers",
    timeEstimate: 7,
    image: "http://www.catherinenicole.com/wp-content/uploads/2011/05/earrings-angela-w1.jpg",
    difficulty: 2
  })

  Projects.add({
    _ids: "p6",
    name: "Robot Chicken",
    description: "Yeah, duh.",
    timeEstimate: 234,
    image: "http://images.fanpop.com/images/image_uploads/Robot-Chicken-robot-chicken-153706_1600_1200.jpg",
    difficulty: 3
  })
}

if (ProjectMaterials.find().count() === 0) {
  ProjectMaterials.add({
    projectId: "p1",
    materialId: "m1"
  })

  ProjectMaterials.add({
    projectId: "p1",
    materialId: "m2"
  })

  ProjectMaterials.add({
    projectId: "p1",
    materialId: "m3"
  })

  ProjectMaterials.add({
    projectId: "p1",
    materialId: "m4"
  })

  ProjectMaterials.add({
    projectId: "p2",
    materialId: "m2"
  })

  ProjectMaterials.add({
    projectId: "p2",
    materialId: "m5"
  })

  ProjectMaterials.add({
    projectId: "p3",
    materialId: "m1"
  })

  ProjectMaterials.add({
    projectId: "p3",
    materialId: "m5"
  })

  ProjectMaterials.add({
    projectId: "p4",
    materialId: "m5"
  })

  ProjectMaterials.add({
    projectId: "p5",
    materialId: "m2"
  })

  ProjectMaterials.add({
    projectId: "p5",
    materialId: "m3"
  })

  ProjectMaterials.add({
    projectId: "p5",
    materialId: "m4"
  })

  // No p6

}

// {
//   name: "",
//   description: "",
//   timeEstimate: 234
//   image: URL
//   difficulty: 1
// }
