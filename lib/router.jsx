FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <ProjectsList />})
  }
})
FlowRouter.route('/material/', {
  action() {
    ReactLayout.render(App, {content: <MaterialList />})
  }
})
