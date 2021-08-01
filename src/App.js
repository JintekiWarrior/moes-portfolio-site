import React, { Component, Fragment } from 'react'
import Home from './components/Home/Home.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Fragment>
        <Home />
      </Fragment>
    )
  }
}

export default App
