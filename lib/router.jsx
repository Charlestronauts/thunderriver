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
