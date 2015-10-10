Unit = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
		  units: Units.all()
		}
	},

	submitUnit() {
		// Prevent default browser form submit
      event.preventDefault();

      var form= Array()
      //unserialize form
      _.map(this.refs, function(value, key){
    		form[key]= React.findDOMNode(value).value
    		React.findDOMNode(value).value = '';
      });

      Units.add(form);
	},

	renderUnits() {
		return this.data.units.map((unit) => {
		  return (
		  	<div>{unit.name}</div>
  		)
		})
	},

	render() {
		return (
			<div>
			  <form className="unit-submit" onSubmit={this.submitUnit}>
					<input ref="name" placeholder="Unit Name" />
			  </form>
		  	{this.renderUnits()}
		  </div>
		)
	}
})
