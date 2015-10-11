LogInNav = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Template.atNavButton, React.findDOMNode(this.refs.container))
  },

  componentWillUnmount() {
    Blaze.remove(this.view)
  },

  render() {
    return <span ref='container' />
  }
})
