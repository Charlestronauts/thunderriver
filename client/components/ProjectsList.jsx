ProjectsList = React.createClass({
  renderProjectItems() {
    return _.times(7, function() {
      return <ProjectItem />
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
