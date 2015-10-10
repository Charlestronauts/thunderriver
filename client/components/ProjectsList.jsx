
ProjectsList = React.createClass({
  renderProjectItems() {
    console.log(this.props)
    return _.map(this.props.projects, (project) => {
      return <ProjectItem key={project._id} project={project} />
    })
  },

  addHandler(e) {
    e.preventDefault()

    Projects.add({
      img:'http://fillmurray.com/300/300',
      name:'name',
      desc:'desc'
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
