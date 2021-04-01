import React, { Component } from 'react';

class ItemCol_9 extends Component {
    quyen=()=>{
        if (this.props.quyen==="1")
        {
            return "Admin"
        }
        else if(this.props.quyen==="2")
        {
            return "Modertor"
        
        }
        else {
            return "Normal"
        }
    }

    ketnoidulieu4 =() =>{this.props.ketnoidulieu3()}
    ketnoidulieu5  =() =>{this.props.setchuyendoiLuufile2()}

    
    render() {

        return (
            <tr>
                    <td >{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.sdt}</td>
                    <td>{this.quyen()}</td>
                    <td>
                        <div className="btn-group">
                        <div className="btn btn-warning sua"><i className="fa fa-edit " onClick={()=>this.ketnoidulieu4()+this.ketnoidulieu5()}/></div>
                        <div className="btn btn-danger xoa" onClick={(idUser)=>this.props.deleteButtunUser2(this.props.id)}><i className="fa fa-delete"  />xoá</div>
                        </div>
                    </td>
            </tr>
        );
    }
}

export default ItemCol_9;