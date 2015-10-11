AccountsTemplates.configure({
  onSubmitHook: () => {
    FlowRouter.go('/')
  },
  onLogoutHook: () => {
    FlowRouter.go('/login')
  }
})
