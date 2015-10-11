const style = {
  image: {
    maxWidth: '100%'
  }
}

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
      <tr>
        <td>
          <div className='tiny ui image'>
            <img src={this.props.item.image} style={style.image} />
          </div>
        </td>
        <td>
          {this.props.item.name}
        </td>
        <td>
          {this.props.item.quantity} {this.props.item.unit}
        </td>
        <td>
          ${this.props.item.cost}
        </td>
      </tr>
    )
  }
})
