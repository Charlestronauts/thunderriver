
ProjectsList = React.createClass({
  renderProjectItems() {
    console.log(this.props)
    return _.map(this.props.projects, (project) => {
      return <ProjectItem key={project._id} project={project} />
    })
  },

  render() {
    return (
      <div className='ui stackable four column doubling grid'>
        {this.renderProjectItems()}
      </div>
    )
  }
})
