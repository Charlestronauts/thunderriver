Materials = new Mongo.Collection('materials')

Materials.helpers({
  get(value) {
    return `${this.createdAt} :)`
  }
})

Materials.add = function(form) {
  Materials.insert(form)
}

Materials.all = function() {
  return Materials.find({}).fetch()
}
