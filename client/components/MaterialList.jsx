MaterialList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      materials: Materials.find({}).fetch()
    }
  },

  renderMaterialItems() {
    return this.data.materials.map((materialItem) => {
      return (
        <MaterialItem item={materialItem} />
      )
    })
  },

  render() {
    return (
      <div className="container materials">
        <h2>Materials</h2>
        <div className="ui divided items">
          {this.renderMaterialItems()}
        </div>
      </div>
    )
  }
})
