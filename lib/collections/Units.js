Units = new Mongo.Collection('units')

Units.helpers({
})

Units.add = function(form) {
  form["userId"] = Meteor.userId;
  Units.insert(form)
}

// {
//   "name": String,
// }
