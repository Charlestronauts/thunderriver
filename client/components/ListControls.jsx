const style = {
  addButton: {
    marginBottom: 20
  }
}

ListControls = React.createClass({

  filterResults() {
    // Prevent default browser form submit
    event.preventDefault();

    var searchTerm = React.findDOMNode(this.refs.search).value

    var curState = this.props.parent.state;
    curState.searchTerm = searchTerm;
    this.props.parent.setState(curState);
  },

  addHandler(e) {
    e.preventDefault()
    this.props.parent.addItem();
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
