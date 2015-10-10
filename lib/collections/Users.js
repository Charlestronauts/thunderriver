Meteor.users.helpers({
  projects: function() {
    return Projects.find({userId: this._id}).fetch()
  },

  materials: function() {
    return Materials.find({userId: this._id}).fetch()
  },

  units: function() {
    return Units.find({userId: this._id}).fetch()
  },

  settings: function() {
    return Settings.find({userId: this._id}).fetch()
  },
});
