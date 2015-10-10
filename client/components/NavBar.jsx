NavBar = React.createClass({
  render() {
    return (
      <div className='ui secondary pointing menu'>
        <h3 className='ui header'>Charlestronauts</h3>
        <a className='item active'>Projects</a>
        <a className='item'>Materials</a>
        <div className='right menu'>
          <a className='ui item'>
            <i className='setting icon'></i>
          </a>
        </div>
      </div>
    )
  }
})
