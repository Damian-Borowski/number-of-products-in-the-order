class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCard: 0,
  }

  handleRemoveFromCard = () => {
    this.setState({
      shoppingCard: this.state.shoppingCard - 1
    })
  }

  handleAddToCard = () => {
    this.setState({
      shoppingCard: this.state.shoppingCard + 1
    })
  }

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCard,
      shoppingCard: 0
    })
  }


  render() {
    const { shoppingCard, availableProducts } = this.state


    return (
      <>
        <button disabled={shoppingCard ? false : true} onClick={this.handleRemoveFromCard}>-</button>
        <span style={shoppingCard === 0 ? { opacity: 0.3 } : {}}> {shoppingCard} </span>
        <button disabled={shoppingCard === availableProducts ? true : false} onClick={this.handleAddToCard}>+</button>
        {shoppingCard > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))