Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      things: Things.all()
    }
  },

  renderThings() {
    return this.data.things.map((thing) => {
      return <div>{thing.happyDate()}</div>
    })
  },

  addThing() {
    Things.add(Date.now())
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
