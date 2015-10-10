FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <Home />})
  }
})
FlowRouter.route('/materialsProto/', {
  action() {
    ReactLayout.render(MaterialsProto)
  }
})
