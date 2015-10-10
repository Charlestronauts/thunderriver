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
  var materialIds = form.materialIds
  _.omit(form, "materialIds")

  ProjectMaterials.add(this._id, materialIds)
  Projects.insert(form)
}

Projects.all = function() {
  return Projects.find({}).fetch()
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
  var relationship = materialIds.map( function(id) {
    return { "projectId": projectId, "materialId": id }
  });
  ProjectMaterials.insert(relationship)
}

ProjectMaterials.all = function() {
  return ProjectMaterials.find({}).fetch()
}
