Material = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
		  materials: Materials.all(),
		  units: Units.all()
		}
	},

	submitMaterial() {
		// Prevent default browser form submit
      event.preventDefault();

      var form= Array()
      //unserialize form
      _.map(this.refs, function(value, key){
    		form[key]= React.findDOMNode(value).value
    		React.findDOMNode(value).value = '';
      });

      Materials.add(form);

			
	},

	unitOptions(){
		return this.data.units.map((unit) => {
				return (
					<option value={unit._id}>{unit.name}</option>
				)
			})
	},

	renderMaterials() {
		return this.data.materials.map((material) => {
		  return (
		  	<div>{material.name}</div>
	  	)
		})
	},

	render() {
		return (
			<div>
			  <form className="material-submit" onSubmit={this.submitMaterial}>
					<input ref="name" placeholder="Material Name" />
					<input ref="cost" placeholder="Material Cost" type = "number"/>
					<input ref="quantity" placeholder="Material Qty" type = "number" />
					<input ref="image" placeholder="Material Image" />
					<select ref="units">
						{this.unitOptions()}
					</select>
					<button className="material-submit-button" type="submit">Add Material</button>
			  </form>
		  	{this.renderMaterials()}
		  </div>
		)
	}
})
