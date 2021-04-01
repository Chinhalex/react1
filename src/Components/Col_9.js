import React, { Component } from 'react';
import ItemCol_9 from './ItemCol_9';

class Col_9 extends Component {
   
    mapingdata=()=> this.props .datauser.map((value,key)=>{
        return(
            <ItemCol_9 deleteButtunUser2={(idUser)=>this.props.deleteButtunUser1(idUser)}
                        ketnoidulieu3 ={() =>this.props.ketnoidulieu2(value)  }
                        setchuyendoiLuufile2={() =>this.props.setchuyendoiLuufile1()}
                        id={key+1}  key={key}
                        name={value.ten}
                        sdt={value.sdt}
                        quyen={value.quyen}
                        stt={key} />
        )
    })

    

    render() {
      
        return (
            <div className="col">
                <table className="table table-striped table-hover table-inverse ">
                <thead>
                    <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện Thoại</th>
                    <th>Quyền</th>
                    <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>

                   {this.mapingdata()}
                   
                </tbody>
                </table>
            </div>
        );
    }
}

export default Col_9;