FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <ProjectPage />})
  }
})

FlowRouter.route('/materials', {
  action() {
    ReactLayout.render(App, {content: <MaterialView />})
  }
})

FlowRouter.route('/units', {
  action() {
    ReactLayout.render(App, {content: <Unit />})
  }
})

FlowRouter.route('/projects', {
  action() {
    ReactLayout.render(App, {content: <ProjectsView />})
  }
})

FlowRouter.route('/project/:projectId', {
  action(params) {
    ReactLayout.render(App, {content: <ProjectPage projectId={params.projectId} />})
  }
})

FlowRouter.route('/login', {
  action() {
    ReactLayout.render(App)
  }
})
