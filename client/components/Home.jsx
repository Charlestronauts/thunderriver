Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      things: Things.find({}).fetch()
    }
  },

  renderThings() {
    return this.data.things.map((thing) => {
      return <div>{thing.createdAt}</div>
    })
  },

  addThing() {
    Things.insert({
      createdAt: Date.now()
    })
  },

  render() {
    return (
      <div>
        <button onClick={this.addThing}>Add thing</button>
        {this.renderThings()}
      </div>
    )
  }
})
