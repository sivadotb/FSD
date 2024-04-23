import { Component } from 'react'

  class Counter extends Component{
    render(){
      return (
          <>
            <div> Current Count : {this.props.counter} </div>
          </>
      )
    }
  }
export default Counter;
