FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <ProjectsList />})
  }
})
FlowRouter.route('/materialsProto/', {
  action() {
    ReactLayout.render(MaterialsProto)
  }
})
