ProjectsView = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		console.log(this.state.searchTerm)
		return {
		  projects: Projects.search(this.state.searchTerm)
		}
  },
	//
  getInitialState() {
    return {
      searchTerm: ""
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
