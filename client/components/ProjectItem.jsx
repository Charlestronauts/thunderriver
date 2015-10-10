ProjectItem = React.createClass({
  render() {
    return (
      <div className='column'>
        <div className="ui card centered">
          <a className="ui image centered">
            <image src={this.props.project.img} />
          </a>
          <div className="content">
            <a className="header" href="#">Trying Cards</a>
            <div className="meta">
              Maybe tags go here, maybe.
            </div>
          </div>
        </div>
      </div>
    )
  }
})
