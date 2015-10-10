
Meteor.users.helpers({
  projects: function() {
    Projects.find({userId: this.userId}).fetch()
  },

  materials: function() {
    Materials.find({userId: this.userId}).fetch()
  },

  units: function() {
    Units.find({userId: this.userId}).fetch()
  },

  settings: function() {
    Settings.find({userId: this.userId}).fetch()
  },
});
