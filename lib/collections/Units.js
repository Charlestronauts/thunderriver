Units = new Mongo.Collection('units')

Units.helpers({
})

Units.add = function(form) {
  Units.insert(form)
}

Units.all = function() {
  return Units.find({}).fetch()
}


// {
//   "name": String,
// }
