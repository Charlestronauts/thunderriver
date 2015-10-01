LogIn = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, React.findDOMNode(this.refs.container))
  },

  componentWillUnmount() {
    Blase.remove(this.view)
  },

  render() {
    return <span ref='container' />
  }
})
