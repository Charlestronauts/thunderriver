const style = {
  padding: '10px 15px'
}

App = React.createClass({
  render () {
    return (
      <div style={style}>
        <NavBar />
        <ProjectsList />
      </div>
    )
  }
})
