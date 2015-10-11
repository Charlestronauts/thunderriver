const style = {
  table: {
    border: 'none'
  },

  th: {
    background: 0
  }
}

MaterialList = React.createClass({

  renderMaterialItems() {
    return _.map(this.props.materials, (materialItem) => {
      return (
        <MaterialItem key={materialItem._id} item={materialItem} />
      )
    })
  },

  render() {
    return (
        <div className="html ui top attached segment">
          <table className='ui celled table' style={style.table}>
            <thead>
              <tr>
                <th style={style.th}></th>
                <th style={style.th}>Description</th>
                <th style={style.th}>Remaining Quantity</th>
                <th style={style.th}>Cost Per Unit</th>
              </tr>
            </thead>
            <tbody>
              {this.renderMaterialItems()}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan='4' style={style.th}>
                  <div className='right floated small ui green labeled icon button'
                       onClick={this.handleAddMaterial}>
                    <i className='add icon'></i> Add Material
                  </div>
                </th>
              </tr>
            </tfoot>
          </table>
          <div className="ui top attached label">Example</div>
        </div>
      )
  }
})
