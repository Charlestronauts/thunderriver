const style = {
  addButton: {
    marginBottom: 20
  }
}

ListControls = React.createClass({
	// mixins: [ReactMeteorData],
  //
	// getMeteorData() {
	// 	var search = undefined;
  //
  //   if (this.state.search.allow) {
  //     // If hide completed is checked, filter tasks
  //     search = this.state.search.term;
  //   }
  //
  //   return {
  //     projects: Projects.search(search)
  //   }
  // },

  // getInitialState() {
  //   return {
  //     search: false
  //   }
  // },

	filterResults() {
		// Prevent default browser form submit
    event.preventDefault();

		var searchTerm = React.findDOMNode(this.refs.search).value

    var curState = this.props.parent.state;
    curState.searchTerm = searchTerm;
    this.props.parent.setState(curState);

		// this.setState({
    //   search: { allow: true, term: search_term }
    // });

    // React.findDOMNode(this.refs.search).value = '';
	},

  addHandler(e) {
    e.preventDefault()

    // TODO: Move logic
    Projects.add({
      image:'http://fillmurray.com/300/300',
      name:'name',
      description:'desc'
    })
  },

	doClear() {
		// Prevent default browser form submit
    event.preventDefault();
    React.findDOMNode(this.refs.search).value = '';
    this.filterResults()
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
            <div className="ui input">
  						<input ref="search" type="text" placeholder="Filter Projects" />
            </div>
            <button className='ui red button' onClick={this.doClear}>Clear</button>
            <button className='ui green button' type='submit'>Submit</button>
				  </form>
	      </div>
	    )
  }
})
