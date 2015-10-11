ProjectsView = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		var search = this.state ? this.state.searchTerm : "";
		return {
		  user: Meteor.user(),
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

	renderListControls() {
    return <ListControls parent={this} />
  },

	renderProjectList() {
		return <ProjectsList projects={this.data.projects} />
	},

	render() {
	    return (
	      <div>
	        <div className='ui'>
						{this.renderListControls()}
					</div>
	        <div>
	          {this.renderProjectList()}
	        </div>
	      </div>
	    )
  }
})
