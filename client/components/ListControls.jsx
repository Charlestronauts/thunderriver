const style = {
  addButton: {
    marginBottom: 20
  }
}

ListControls = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		var search = undefined;

    if (this.state.search.allow) {
      // If hide completed is checked, filter tasks
      search = this.state.search.term;
    }

    return {
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

	render() {
	    return (
	      <div>
          <button className='ui green labeled icon button addProject'
                  style={style.addButton}
                  onClick={this.addHandler}>
            <i className='plus icon'></i>
            Add
          </button>
	        <form className="unit-submit" onSubmit={this.filterResults}>
						<input ref="search" type="text" placeholder="Filter Projects" />
						<button onClick={this.doClear}>Clear Filter</button>
				  </form>
	      </div>
	    )
  }
})
