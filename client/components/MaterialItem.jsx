MaterialItem = React.createClass({
  render() {
    var tags
    if (this.props.item.tags) {
      tags = this.props.item.tags.map(function (tag) {
        return (
          <MaterialTag tag={tag} />
        )
      })
    }
    return (
      <div className="item">
        <div className="ui image">
          <img src={this.props.item.image} />
        </div>
        <div className="content">
          <a className="header">{this.props.item.name}</a>
          <div className="meta">
            {this.props.item.meta}
          </div>
          <div className="description">
            <p>{this.props.item.description}</p>
          </div>
          <div className="extra">
            <div className="ui right floated blue labeled icon button">
              Update
              <i className="icon edit"></i>
            </div>
            <div className="ui right floated red labeled icon button">
              Delete
              <i className="icon trash"></i>
            </div>
            {tags}
          </div>
        </div>
      </div>
    )
  }
})
