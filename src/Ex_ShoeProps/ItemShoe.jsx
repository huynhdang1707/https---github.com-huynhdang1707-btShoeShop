import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div className='col-6'>
        <img className='w-100'
         src={this.props.data.image} alt=''/>
        <h4>{this.props.data.name}</h4>
        <button onClick={()=>this.props.handleClick(this.props.data)} className='btn btn-primary'>VIEW</button>
        <button onClick={()=>this.props.handleAddToCart(this.props.data)} className='btn btn-danger'>ADD</button>
      </div>
    )
  }
}

