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

  renderProjectList() {
    return <MaterialList materials={this.data.materials} />
  },

  render() {
      return (
        <div>
          <div>
            <ListControls parent={this} />
          </div>
          <div>
            {this.renderProjectList()}
          </div>
        </div>
      )
  }
})
