ProjectItem = React.createClass({
  render() {
    console.log(4)
    return (
      <div className='column'>
        <div className="ui card centered">
          <a className="ui image centered">
            <image src="http://fillmurray.com/300/300" />
          </a>
          <div className="content">
            <a className="header" href="#">Trying Cards</a>
            <div class="meta">
              Maybe tags go here, maybe.
            </div>
          </div>
        </div>
      </div>
    )
  }
})
