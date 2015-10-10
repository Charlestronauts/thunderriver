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
