BlazeWrapper = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(this.props.template, React.findDOMNode(this.refs.container))
  },

  componentWillUnmount() {
    Blaze.remove(this.view)
  },

  render() {
    return <span ref='container' />
  }
})
