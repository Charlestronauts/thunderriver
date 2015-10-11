Projects = new Mongo.Collection("projects")

Projects.helpers ({
  materials() {
    return _.map(this.materialsUsed, (value, key) => {
      return {...Materials.findOne(key),
        amountUsed: value
      }
    })
  }
})

Projects.add = function(form) {
  form["userId"] = Meteor.userId;
  Projects.insert(form)
}

Projects.search = function(searchTerm) {
  if (searchTerm && searchTerm.length > 0) {
    return _.filter(Meteor.user().projects(), function(proj) {
      return ((proj.name + proj.description).toLowerCase()).includes(searchTerm.toLowerCase());
    })
  }
  return Meteor.user().projects()

  // if (typeof searchterm !== 'undefined') {
  //   return Meteor.user().projects().find({
  //     $or:[
  //       {"name" : { $regex: searchterm }}
  //     ]
  //   }).fetch()
}
