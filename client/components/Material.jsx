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
		  <form className="material-submit">
				<input ref="name" placeholder="Material Name" />
				<input ref="cost" placeholder="Material Cost" />
				<input ref="quantity" placeholder="Material Qty" />
				<input ref="image" placeholder="Material Name" />
				<button className="material-submit-button" onSubmit={this.submitMaterial}>This is stupid</button>
		  </form>
	  	{this.renderMaterials()}
	  </div>
	)
}
})