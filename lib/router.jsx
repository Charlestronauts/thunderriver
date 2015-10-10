FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <Home />})
  }
})
FlowRouter.route('/materials', {
  action() {
    ReactLayout.render(App, {content: <Material />})
  }
})
