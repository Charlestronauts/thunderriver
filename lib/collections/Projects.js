Projects = new Mongo.Collection("projects")
ProjectsSearch = new Mongo.Collection(null)
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
  var materialIds = form.materialIds
  form = _.omit(form, "materialIds")

  ProjectMaterials.add(this._id, materialIds)
  Projects.insert(form)
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

//PROJECT SEARCH TEMP COLLECTION

ProjectsSearch.add = function(collection) {
  return collection.copyTo(ProjectsSearch);
}
ProjectsSearch.all = function() {
  return ProjectsSearch.find({}).fetch()
}
ProjectsSearch.purge = function() {
  ProjectsSearch.remove({})
}

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
