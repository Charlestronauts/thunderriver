ProjectsView = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		console.log(this.state.searchTerm)
		return {
		  projects: Projects.search(this.state.searchTerm)
		}
		// var search = undefined;
		//
    // if (this.state.search.allow) {
    //   // If hide completed is checked, filter tasks
    //   search = this.state.search.term;
    // }
		//
    // return {
    //   projects: Projects.search(search)
    // }
  },
	//
  getInitialState() {
    return {
      searchTerm: ""
    }
  },
	//
	// filterResults(){
	// 	// Prevent default browser form submit
  //   event.preventDefault();
	//
	// 	var search_term = React.findDOMNode(this.refs.search).value
	//
	// 	this.setState({
  //     search: {allow: true, term: search_term}
  //   });
	//
  //   React.findDOMNode(this.refs.search).value = '';
	// },

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
