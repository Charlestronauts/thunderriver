ProjectItem = React.createClass({
  render() {
    return (
      <div className='column'>
        <div className="ui card centered">
          <a className="ui image centered">
            <image src={this.props.project.img} />
          </a>
          <div className="content">
            <a className="header" href="#">{this.props.project.name}</a>
            <div className="meta">
              {this.props.project.desc}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
