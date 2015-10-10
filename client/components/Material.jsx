Material = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
		  materials: Materials.all()
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

	renderMaterials() {
		return this.data.materials.map((material) => {
		  return (
		  	<div>{material.name}</div>
	  	)
		})
	},

	addThing() {
		Materials.add(Date.now())
	},

	render() {
	return (
		<div>
		  <form className="material-submit" onSubmit={this.submitMaterial}>
				<input ref="name" placeholder="Material Name" />
				<input ref="cost" placeholder="Material Cost" />
				<input ref="quantity" placeholder="Material Qty" />
				<input ref="image" placeholder="Material Image" />
				<button className="material-submit-button" type="submit">This is stupid</button>
		  </form>
	  	{this.renderMaterials()}
	  </div>
	)
}
})
