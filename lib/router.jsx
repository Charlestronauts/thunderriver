FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <ProjectsList />})
  }
})
FlowRouter.route('/materials', {
  action() {
    ReactLayout.render(App, {content: <Material />})
  }
})
FlowRouter.route('/units', {
  action() {
    ReactLayout.render(App, {content: <Unit />})
  }
})
FlowRouter.route('/projects', {
  action() {
    ReactLayout.render(App, {content: <ProjectsList />})
  }
})
