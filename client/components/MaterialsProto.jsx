

const style = {
  padding: '10px 15px'
}

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
          <a className="header">{this.props.item.title}</a>
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

MaterialTag = React.createClass({
  render() {
    return (
      <div className="ui label">{this.props.tag}</div>
    )
  }
})

MaterialsProto = React.createClass({
  componentDidMount() {
    $('.accordion').accordion();
  },  
  render() {
    var materialItems = [{
      title: "Nicholas Cage",
      image: 'http://placecage.com/200/200',
      meta: 'This is like a subtitle',
      description: 'This is the part below the subtitle. It\'s a description',
      tags: [
        'list',
        'of',
        'tags'
      ]
    }, {
      title: "Steven Segall",
      image: 'http://stevensegallery.com/200/200',
      meta: 'I am a banana',
      description: 'My arms feel like little sausages',
      tags: [
        'some',
        'more',
        'tags'
      ]
    }, {
      title: "Bill Murray",
      image: 'http://fillmurray.com/200/200',
      meta: 'Funny man Bill',
      description: 'Stay funny!'
    }].map(function (materialItem) {
      return (
        <MaterialItem item={materialItem} />
      )
    })
    return (
      <div className="container materials">
        <h2>Materials</h2>
        <div className="ui divided items">
          {materialItems}
        </div>
      </div>
    )
  }
})
