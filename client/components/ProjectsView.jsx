ProjectsView = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
		  projects: Meteor.user().projects()
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
  // getInitialState() {
  //   return {
  //     search: false
  //   }
  // },
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

	renderProjectList() {
    return <ProjectsList parent={this} />
  },

	renderListControls() {
		return <ListControls projects={this.data.projects} />
	},

	render() {
	    return (
	      <div>
	        <div className='ui'>
						{this.renderListControls()}
					</div>
	        <div className='ui stackable four column doubling grid'>
	          {this.renderProjectList()}
	        </div>
	      </div>
	    )
  }
})
