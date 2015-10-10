Project = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
		  projects: Projects.all(),
		  materials: Materials.all()
		}
	},

	submitProject() {
		// Prevent default browser form submit
      event.preventDefault();

      var form= Array()
      //unserialize form
      _.map(this.refs, function(value, key){
    		form[key]= React.findDOMNode(value).value
    		React.findDOMNode(value).value = '';
      });

      Projects.add(form);			
	},

	materialOptions(){
		return this.data.materials.map((material) => {
				return (
					<option value={material._id}>{material.name}</option>
				)
			})
	},

	renderProjects() {
		return this.data.projects.map((project) => {
		  return (
		  	<div>{project.name}</div>
	  	)
		})
	},

	render() {
		return (
			<div>
			  <form className="project-submit" onSubmit={this.submitProject}>
					<input ref="name" placeholder="Project Name" type="text"/>
					<textarea rows="4" cols="50" name="description" form="usrform" placeholder="Description of Project" />
					<input ref="timeestimate" placeholder="Time Estimation" type = "number" />
					<select ref="difficulty" placeholder="Difficulty">
						<option value="1"> Easy </option>
						<option value="2"> Medium </option>
						<option value="3"> Legendary </option>
					</select>
					<input ref="image" placeholder="Material Image" />
					<select ref="materials" multiple>
						{this.materialOptions()}
					</select>
					<button className="project-submit-button" type="submit">This is stupid</button>
			  </form>
		  	{this.renderProjects()}
		  </div>
		)
	}
})
