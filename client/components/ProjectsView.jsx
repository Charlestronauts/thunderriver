ProjectsView = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var search = this.state ? this.state.searchTerm : "";
    return {
      projects: Projects.search(search)
    }
  },

  addItem() {
    Projects.add({
      image:'http://fillmurray.com/300/300',
      name:'name',
      description:'desc'
    })
  },

  render() {
      return (
        <div>
          <div>
            <ListControls parent={this} />
          </div>
          <div>
            <ProjectsList projects={this.data.projects} />
          </div>
        </div>
      )
  }
})
