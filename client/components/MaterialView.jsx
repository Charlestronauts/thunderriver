MaterialView = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var search = this.state ? this.state.searchTerm : "";
    return {
      materials: Materials.search(search)
    }
  },

  addItem() {
    // TODO: Add something
  },

  renderListControls() {
    return <ListControls parent={this} />
  },

  renderProjectList() {
    return <MaterialList materials={this.data.materials} />
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
