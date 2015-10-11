// forward to /login if they aren't authenticated
FlowRouter.triggers.enter([(context, redirect) => {
  if(context.path !== '/login'){
    if(!Meteor.userId()){
      redirect('/login');
    }
  }
}])

FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <ProjectPage />})
  }
})

FlowRouter.route('/materials', {
  action() {
    ReactLayout.render(App, {content: <MaterialList />})
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
