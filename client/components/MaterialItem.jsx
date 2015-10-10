MaterialItem = React.createClass({
  deleteMaterial() {
    Materials.remove(this.props.item._id)
  },


  render() {
    var tags
    if (this.props.item.tags) {
      tags = this.props.item.tags.map(function (tag) {
        return (
          <MaterialTag tag={tag} />
        )
      })
    }

    return (
      <div className="item">
        <div className="ui tiny image">
          <img src={this.props.item.image} />
        </div>
        <div className="content">
          <div className="description">
            <div className="ui relaxed divided list">
              <div className="item">
                <strong>{this.props.item.name}</strong>
              </div>
              <div className="item">
                ${this.props.item.cost}
              </div>
              <div className="item">
                <strong>Quantity</strong> {this.props.item.quantity} {this.props.item.unit}
              </div>
            </div>
          </div>
          <div className="extra">
            <button className="ui right floated blue labeled icon button" onClick={this.deleteMaterial}>
              <i className="icon edit"></i>
              Update
            </button>
            <button className="ui right floated red labeled icon button">
              <i className="icon trash"></i>
              Delete
            </button>
            {tags}
          </div>
        </div>
      </div>
    )
  }
})
