ProjectPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user(),
      project: Projects.findOne(this.props.projectId)
    }
  },

  render() {
    return (
      <div>
        <div className='ui items'>
          <div className='item'>
            <div className='ui medium image'>
              <div className='ui blue ribbon label'>
                {this.data.project.name}
              </div>
              <img src={this.data.project.image} />
            </div>
            <div className='content'>
              <div className='meta'>Description</div>
              <div className='description'>
                <p>{this.data.project.description}</p>
              </div>
            </div>
          </div>
        </div>

        <ProjectMaterialsList project={this.data.project} />
      </div>
    )
  }
})
