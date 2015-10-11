const style = {
  image: {
    maxWidth: '100%'
  }
}

ProjectMaterialsItem = React.createClass({
  render() {
    return (
      <tr>
        <td>
          <div className='tiny ui image'>
            <img src={this.props.material.image} style={style.image} />
          </div>
        </td>
        <td>
          {this.props.material.name}
        </td>
        <td>
          {this.props.material.amountUsed}
        </td>
        <td>
          $
        </td>
      </tr>
    )
  }
})
