MaterialCreateModal = React.createClass({
  modalSubmit(e) {
    console.log('modalSubmit is getting called')
    e.preventDefault()

    if (true) { // todo: validate form
      Materials.add({
        name: e.target.name.value,
        cost: e.target.cost.value,
        quantity: e.target.quantity.value,
        image: e.target.image.value,
      })

      e.target.name.value = ''
      e.target.cost.value = ''
      e.target.quantity.value = ''
      e.target.image.value = ''
      $('.create-material-modal').modal('hide')
    }
  },

  clearForm(e) {
    e.preventDefault()

    $form = $('.create-material-modal > form')
    $form.find('input, select, textarea').val('')
  },

  render() {
    return (
      <div className="ui modal create-material-modal">
        <div className="header">Create New Material</div>
        <form onSubmit={this.modalSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="cost" placeholder="Cost" />
          <input type="text" name="quantity" placeholder="Quantity" />
          <input type="text" name="image" placeholder="Image Url" />
          <input className="ui green labeled icon button" type="submit" value="Create" />
          <button className="ui red labeled icon button" onClick={this.clearForm}>
            <i className="close icon"></i>
            Close
          </button>
        </form>
      </div>
    )
  }
})
