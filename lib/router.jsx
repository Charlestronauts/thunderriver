FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <Home />})
  }
})
