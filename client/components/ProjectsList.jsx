ProjectsList = React.createClass({
  renderProjectItems() {
    console.log(1)
    return _.times(7, function() {
      return <ProjectItem />
    })
  },

  render() {
    console.log(3)
    return (
      <div className='ui stackable four column doubling grid'>
        {this.renderProjectItems()}
      </div>
    )
  }
})
