import React, { Component } from 'react'
import { shoeArr } from './data'
import CartShoe from './CartShoe'
import ListShoe from './ListShoe'

export default class Ex_Shoe extends Component {
    state ={
        shoeArr: shoeArr,
        cart :[]
    };
    // viết function thêm vào giỏ hàng (cart)
    handleAddToCart =(shoe) =>{
        // this.setState({detail :shoe})
        // 2 trường hợp : sp đã có trong giỏ hàng, sp chưa có trong giỏ 
        // kiểm tra đã có trong giỏ hàng hay chưa findIndex : trả về vị trí nếu tìm thấy, ko tìm thấy trả về -1


        let cloneCart = [...this.state.cart]; //... copy
        let index = cloneCart.findIndex((item)=>item.id ==shoe.id); // tìm vị trí của shoe trong cloneCart
      if(index ==-1){
        //th1 : sp chưa có trong giỏ hàng
        // tạo object mới có thêm key soLuong:1
        let newShoe ={...shoe, soLuong :1};
        cloneCart.push(newShoe);
      }else{
        //th2 xử lí sản phẩm đã có trong giỏ hàng 
        cloneCart[index].soLuong++;

      }  
        this.setState({cart :cloneCart})
    }
    handleDelete =(id) =>{
        let newCart =this.state.cart.filter((item)=>item.id != id);
        this.setState({cart :newCart})
    }
  render() {
    return (
      <div className='row'>
        <CartShoe handleDelete={this.handleDelete} cart={this.state.cart}/>
        <ListShoe handleAddToCart={this.handleAddToCart} list={this.state.shoeArr}/>
      </div>
    )
  }
}
