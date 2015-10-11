const style = {
  main: {
    padding: '10px 15px'
  },
  container: {
    maxWidth: 1000,
    margin: '0 auto'
  }
}

App = React.createClass({
  render () {
    return (
      <div style={style}>
        <NavBar />
        <div className='container' style={style.container}>
          {this.props.content}
        </div>
      </div>
    )
  }
})
