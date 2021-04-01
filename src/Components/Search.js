import React, { Component } from 'react';
import LuuData from './LuuData';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            textValue:"",
            userdata:{}
        }
    }
    dulieuNhandc=(event)=>{
        this.setState({
            textValue: event.target.value
        });
    }
    hienthinut =()=>{
        if(this.props.hienthinut===true)
        {
            return <div className="btn btn-block btn-outline-info" onClick ={()=>this.props.chuyendoi()}>Thêm mới</div>
        }
        else
        {
            return <div className="btn btn-block btn-outline-secondary" onClick ={()=>this.props.chuyendoi()}>Đóng lại</div>
        }
    }
    dulieuforapp1  =(info) =>{
        this.setState({
            userdata:info
        });
        
    }
    render() {
        
        return (
            <div className="col-12">
                
                {this.hienthinut()}
                <LuuData dulieuforapp1={(info)=>this.props.dulieuforapp(info)}userObject={this.props.userObject} trangthaicd={this.props.trangthaiuser} setchuyendoiLuufile2={() =>this.props.setchuyendoiLuufile1()}/>
                <div className="form-group mt-2">
                    <div className="btn-group" role="group" aria-label="Button group">
                        <input onChange={(event)=>this.dulieuNhandc(event)} type="text" className="form-control" placeholder="Nhập từ khoá tìm kiếm" />
                        <div onClick={()=>this.props.submitsearch(this.state.textValue)} className="btn btn-info">Tìm</div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Search;