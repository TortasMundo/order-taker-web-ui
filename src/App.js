import React, { Component } from 'react'
import './tacit-css.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App
