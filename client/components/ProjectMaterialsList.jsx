ProjectMaterialsList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      materials: this.props.project.materials()
    }
  },

  renderMaterials() {
    return this.data.materials.map((material) => {
      return <ProjectMaterialsItem key={material._id} material={material} />
    })
  },

  handleAddMaterial(e) {
    e.preventDefault()

    console.log('add materials clicked')
  },

  render() {
    return (
      <table className='ui selectable celled striped table'>
          <thead>
            <tr>
              <th colSpan='4'>Materials</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMaterials()}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='4'>
                <div className='right floated small ui green labeled icon button'
                     onClick={this.handleAddMaterial}>
                  <i className='add icon'></i> Add Material
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
    )
  }
})
