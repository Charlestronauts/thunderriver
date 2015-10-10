Materials = new Mongo.Collection(null)

Materials.helpers({
  happyDate() {
    return `${this.createdAt} :)`
  }
})

Materials.add = function(createdAt) {
  Materials.insert({
    createdAt
  })
}

Materials.all = function() {
  return Materials.find({}).fetch()
}


{
  "Name": "",
  "Unit", "id",
}
