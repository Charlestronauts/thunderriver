NavBar = React.createClass({
  handleClick(e) {
    const $target = $(e.target)

    $('.item.active').removeClass('active')
    $target.addClass('active')

    FlowRouter.go($target.attr('data-route'))
  },

  render() {
    return (
      <div className='ui secondary pointing menu'>
        <div className='header item'>Charlestronauts</div>
        <a className='item active'
           data-route='/projects'
           onClick={this.handleClick}>Projects</a>
        <a className='item'
           data-route='/materials'
           onClick={this.handleClick}>Materials</a>
        <div className='right menu'>
          <a className='ui item'>
            <i className='setting icon'></i>
          </a>
        </div>
        <LogInNav />
      </div>
    )
  }
})
