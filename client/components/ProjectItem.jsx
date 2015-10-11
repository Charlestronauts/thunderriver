ProjectItem = React.createClass({
  handleClick() {
    FlowRouter.go(`/project/${this.props.project._id}`)
  },

  render() {
    return (
      <div className='column link'
           onClick={this.handleClick}>
        <div className="ui card centered">
          <a className="ui image centered">
            <img src={this.props.project.getImage()} />
          </a>
          <div className="content">
            <a className="header" href="#">{this.props.project.name}</a>
            <div className="meta">
              {this.props.project.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
