Materials = new Mongo.Collection('materials')

Materials.add = function(form) {
  form["userId"] = Meteor.userId();
  Materials.insert(form)
}

Materials.search = function(searchTerm) {
  if (searchTerm && searchTerm.length > 0) {
    return _.filter(Meteor.user().materials(), function(proj) {
      return (proj.name.toLowerCase()).includes(searchTerm.toLowerCase());
    })
  }
  return Meteor.user() ? Meteor.user().materials() : []
}


// {
//   "name": String,
//   "cost": 123,
//   "quantity": 123,
//   "image", URL,
// }
