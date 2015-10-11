MaterialList = React.createClass({

  renderMaterialItems() {
    // return _.map(this.props.materials, (materialItem) => {
    //   return (
    //     <tr>
    //       <td>
    //         <h4 class="ui image header">
    //           <img src="/images/avatar2/small/lena.png" class="ui mini rounded image">
    //           <div class="content">
    //             Lena
    //             <div class="sub header">Human Resources
    //           </div>
    //         </div>
    //       </h4></td>
    //       <td>
    //         22
    //       </td>
    //     </tr>
    //   )
    // })

    return _.map(this.props.materials, (materialItem) => {
      return (
        <MaterialItem key={materialItem._id} item={materialItem} />
      )
    })
  },

  render() {
    return (
      <table class="ui very basic collapsing celled table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Employee</th>
          </tr>
          <tbody>
            {this.renderMaterialItems()}
          </tbody>

        </thead>
      </table>
    )


    // return (
    //   <div className="ui divided items">
    //     {this.renderMaterialItems()}
    //   </div>
    // )
  }
})

/*

<table class="ui very basic collapsing celled table">
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/lena.png" class="ui mini rounded image">
          <div class="content">
            Lena
            <div class="sub header">Human Resources
          </div>
        </div>
      </h4></td>
      <td>
        22
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/matthew.png" class="ui mini rounded image">
          <div class="content">
            Matthew
            <div class="sub header">Fabric Design
          </div>
        </div>
      </h4></td>
      <td>
        15
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/lindsay.png" class="ui mini rounded image">
          <div class="content">
            Lindsay
            <div class="sub header">Entertainment
          </div>
        </div>
      </h4></td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/mark.png" class="ui mini rounded image">
          <div class="content">
            Mark
            <div class="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
        11
      </td>
    </tr>
  </tbody>
</table>

*/
