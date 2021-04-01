
import '../App.css';
import Col_3 from './Col_3';
import Col_9 from './Col_9';
import Header from './Header';
import Search from './Search';
import React, { Component } from 'react';
import Dt from './data.json'

import { v4 as uuidv4 } from 'uuid';
class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      trangthaichuyendong:true,
      data : Dt,
      SearchText:"",
      edituser:true


    }
  }
  ketnoi = ()=>{
    this.setState({
      trangthaichuyendong:!this.state.trangthaichuyendong
    })
  }
  getTextValue=(dl)=>{
    this.setState({
      SearchText:dl
      
    });
    
  }
  getdatauser=(id,ten,sdt,quyen)=>{
     var item= {};
       item.id=uuidv4();
       item.ten=ten;
       item.sdt=sdt;
       item.quyen=quyen;
       var items =this.state.data;
       items.push(item)
      this.setState(
        {
          data:items
        }
      );
  }
  ketnoidulieu =(user) =>{
    this.setState({
      userObject : user
    });
    console.log(user);
  }
  setchuyendoiLuufile  =() =>{
    this.setState({
      edituser:!this.state.edituser
    });
  }
  dulieuforapp  =(info) =>{
    this.state.data.forEach((value,key)=>{
      if (value.id===info.id)
      {
        value.ten=info.ten;
        value.sdt=info.sdt;
        value.quyen=info.quyen;
      }
    })
  }
  deleteButtunUser  =(idUser) =>{
    console.log(idUser);
    //dùng hàm filter để lấy các phần tử !== idUser và xoá đi pần tử iduser
    var itemdata=this.state.data.filter( item => item.id !=idUser);
    this.setState({
      data:itemdata
    });
}
  render() {
    // lấy từng mảng ra dùng hàm forEach :item 
    //xem thứ item tên nào chứa this.state.SearchText(chuỗi tìm kiếm) thì 
    //đẩy item đó vào mảng kết quả dùng hàm push.
    var ketqua=[];
      this.state.data.forEach((item)=>{
        if(item.ten.indexOf(this.state.SearchText)!=-1)
        {
          
          ketqua.push(item)
        }
      })
    
      
    return (
      <div>
        <div className="App">
          <Header></Header>
          <div className="searchForm">
              <div className="container">
                  <div className="row">
                    <Search dulieuforapp={(info)=>this.dulieuforapp(info)}
                    userObject={this.state.userObject}
                    setchuyendoiLuufile1={() =>this.setchuyendoiLuufile()} trangthaiuser={this.state.edituser}
                    submitsearch={(dl)=>{this.getTextValue(dl)}} chuyendoi={()=>this.ketnoi()} hienthinut ={this.state.trangthaichuyendong}></Search>
                    <div className="col-12">
                      <hr />
                    </div>
                    <Col_9 deleteButtunUser1={(idUser)=>this.deleteButtunUser(idUser)}
                    setchuyendoiLuufile1={() =>this.setchuyendoiLuufile()}
                    ketnoidulieu2={ (user) =>{this.ketnoidulieu(user)}} datauser={ketqua}></Col_9>
                    <Col_3 add={(id,ten,sdt,quyen)=>this.getdatauser(id,ten,sdt,quyen)} hienthiForm ={this.state.trangthaichuyendong}></Col_3>
                  </div> 
              </div>
         </div>
    </div>
      </div>
    );
  }
}



export default App;
