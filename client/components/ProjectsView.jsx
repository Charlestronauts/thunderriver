ProjectsView = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		var search = this.state ? this.state.searchTerm : "";
		return {
		  projects: Projects.search(search)
		}
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
