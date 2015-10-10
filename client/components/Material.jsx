Material = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
		  materials: Materials.all()
		}
	},

	renderMaterials() {
	return this.data.things.map((thing) => {
	  return <div>{thing.happyDate()}</div>
	})
	},

	addThing() {
		Materials.add(Date.now())
	},

	render() {
	return (
	  <form className="material-submit" onSumbit={this.submitMaterial}>
			<input ref="name" placeholder="Material Name" />
			<input ref="cost" placeholder="Material Cost" />
			<input ref="quantity" placeholder="Material Qty" />
			<input ref="name" placeholder="Material Name" />
			<input ref="name" placeholder="Material Name" />
			<input ref="name" placeholder="Material Name" />
	  </form>
	)
}
})