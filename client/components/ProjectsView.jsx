ProjectsView = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		var search = undefined;

    if (this.state.search.allow) {
      // If hide completed is checked, filter tasks
      search = this.state.search.term;
    }

    return {
      user: Meteor.user(),
      projects: Projects.search(search)
    }
  },

  getInitialState() {
    return {
      search: false
    }
  },

	filterResults(){
		// Prevent default browser form submit
    event.preventDefault();

		var search_term = React.findDOMNode(this.refs.search).value

		this.setState({
      search: {allow: true, term: search_term}
    });

    React.findDOMNode(this.refs.search).value = '';
	},

	doClear(){
		// Prevent default browser form submit
    event.preventDefault();

		this.setState({
      search: {allow: true, term: undefined}
    });
	},

	renderProjectList() {
    return <ProjectsList projects={this.data.projects} />
  },
	render() {
	    return (
	      <div>
	        <form className="unit-submit" onSubmit={this.filterResults}>
						<input ref="search" type="text" placeholder="Filter Projects" />
				  </form>
				  <button onClick={this.doClear}>Clear Filter</button>
	        <div className='ui stackable four column doubling grid'>
	          {this.renderProjectList()}
	        </div>
	      </div>
	    )
  }
})
