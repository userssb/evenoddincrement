import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const rn = Math.floor(Math.random() * 100)
    this.setState({count: rn})
  }

  render() {
    const {count} = this.state
    const num = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-cont">
        <div className="app-cont">
          <h1 className="heading">Count {count}</h1>
          <p>Count is {num}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 To 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
