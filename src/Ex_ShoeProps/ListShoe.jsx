import React, { Component } from 'react'
import ItemShoe from './ItemShoe';

export default class ListShoe extends Component {
  render() {
    let {list} = this.props;
    return (
      <div className='row col-6'>{list.map((item)=>{
        return <ItemShoe handleAddToCart={this.props.handleAddToCart} key={item.id} data={item}/>
      })}
      </div>
    )
  }
}
