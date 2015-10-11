const style = {
  addButton: {
    marginBottom: 20
  }
}

ListControls = React.createClass({

  filterResults(event) {
    // Prevent default browser form submit
    event && event.preventDefault();

    var searchTerm = React.findDOMNode(this.refs.search).value

    var p = this.props.parent
    p.setState({...p.state, searchTerm: searchTerm})
  },

  addHandler(e) {
    e.preventDefault()
    this.props.parent.addItem();
  },

  doClear(event) {
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
            <input ref="search" type="text" placeholder="Filter Projects" />
            <button className='ui red button' type='button' onClick={this.doClear}>Clear</button>
            <button className='ui green button' type='submit'>Submit</button>
          </form>
        </div>
      )
  }
})
