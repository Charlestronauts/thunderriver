Things = new Mongo.Collection(null)

Things.helpers({
  happyDate() {
    return `${this.createdAt} :)`
  }
})

Things.add = function(createdAt) {
  Things.insert({
    createdAt
  })
}

Things.all = function() {
  return Things.find({}).fetch()
}
