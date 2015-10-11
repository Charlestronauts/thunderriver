const style = {
  addButton: {
    marginBottom: 20
  }
}

MaterialList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user(),
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

  addHandler(e) {
    e.preventDefault();

    Materials.add({
      "name": 'Barbra Streisand',
      "cost": 123,
      "quantity": 123,
      "image": 'http://fillmurray.com/200/200',
    })
  },

  render() {
    return (
      <div className="container materials">
        <button className='ui green labeled icon button addProject' style={style.addButton} onClick={this.addHandler}>
          <i className="plus icon"></i>
          Add
        </button>
        <div className="ui divided items">
          {this.renderMaterialItems()}
        </div>
      </div>
    )
  }
})
