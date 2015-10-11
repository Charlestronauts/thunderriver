MaterialList = React.createClass({

  renderMaterialItems() {
    console.log(this.props.materials)
    return _.map(this.props.materials, (materialItem) => {
      return (
        <MaterialItem item={materialItem} />
      )
    })
  },

  render() {
    return (
      <div className="ui divided items">
        {this.renderMaterialItems()}
      </div>
    )
  }
})
