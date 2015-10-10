Projects = new Mongo.Collection("projects")
ProjectMaterials = new Mongo.Collection("projectMaterials")

Projects.helpers ({
  materials() {
    var materialQuery = ProjectMaterials.find({projectId: this._id}, {materialId: true, _id: false}).fetch();
    var materialIds = materialQuery.pluck("materialId");

    return Materials.find({materialIds}).fetch();
  },

  happyDate() {
    return `${this.createdAt} :)`
  }
})

Projects.add = function(form) {
  form["userId"] = Meteor.userId;
  var materialIds = form.materialIds
  form = _.omit(form, "materialIds")

  var pid = Projects.insert(form)
  ProjectMaterials.add(pid, materialIds)
}

Projects.all = function() {
  return Projects.find({}).fetch()
}

Projects.search = function(searchterm) {
  if(typeof searchterm !== 'undefined'){
    return Projects.find({
      $or:[
        {"name" : { $regex: searchterm }}
      ]
    }).fetch()
  }else{
    return Projects.all()
  }
},

// PROJECT MATERIALS

ProjectMaterials.helpers ({
  projects() {
    var projectQuery = ProjectMaterials.find({materialId: this._id}, {projectId: true, _id: false}).fetch();
    var projectIds = projectQuery.pluck("projectId");

    return Projects.find({projectIds}).fetch();
  }
})

ProjectMaterials.add = function(projectId, materialIds) {
  var relationship = _.map(materialIds, function(id) {
    return { "projectId": projectId, "materialId": id }
  });
  ProjectMaterials.insert(relationship)
}

ProjectMaterials.all = function() {
  return ProjectMaterials.find({}).fetch()
}
