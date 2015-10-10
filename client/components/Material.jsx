Material = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
		  materials: Materials.all()
		}
	},

	submitMaterial(event) {
		// Prevent default browser form submit
      event.preventDefault();

      //unserialize form
      const form = this.refs.form.getDOMNode().elements;
      Materials.add(form);

				input.value = '';
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
				<input ref="name" placeholder="Material Name" value="Test Material Name" />
				<input ref="cost" placeholder="Material Cost" value="12.32" />
				<input ref="quantity" placeholder="Material Qty" value="5" />
				<input ref="image" placeholder="Material Image" value="http://www.fillmurray.com/200/200" />
				<button className="material-submit-button" type="submit">This is stupid</button>
		  </form>
	  	{this.renderMaterials()}
	  </div>
	)
}
})
