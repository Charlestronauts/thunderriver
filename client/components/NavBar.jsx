NavBar = React.createClass({
  render() {
    return (
      <div className='ui secondary pointing menu'>
        <div className='header item'>Charlestronauts</div>
        <a className='item active'>Projects</a>
        <a className='item'>Materials</a>
        <div className='right menu'>
          <a className='ui item'>
            <i className='setting icon'></i>
          </a>
          <LogIn />
        </div>
      </div>
    )
  }
})
