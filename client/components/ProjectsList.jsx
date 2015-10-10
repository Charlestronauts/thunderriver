const style = {
  addButton: {
    marginBottom: 20
  }
}

ProjectsList = React.createClass({
  renderProjectItems() {
    return this.props.projects.map((project) => {
      return <ProjectItem key={project._id} project={project} />
    })
  },

  addHandler(e) {
    e.preventDefault()

    Projects.insert({
      img:'http://fillmurray.com/300/300',
      name:'name',
      desc:'desc'
    })
  },

  render() {
    return (
      <div>
        <button className='ui green labeled icon button'
                style={style.addButton}
                onClick={this.addHandler}>
          <i className='plus icon'></i>
          Add
        </button>
        <div className='ui stackable four column doubling grid'>
          {this.renderProjectItems()}
        </div>
      </div>
    )
  }
})
