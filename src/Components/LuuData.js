import React, { Component } from 'react';

class LuuData extends Component {
    constructor(props) {
        super(props);
        // this.state ={
        //     // id:this.props.userObject.id,
        //     ten:this.props.userObject.ten,
        //     sdt:this.props.userObject.sdt,
        //     quyen:this.props.userObject.quyen
        // }
    }
    
    ischange  =(event) =>{
        const name = event.target.name;
        const giatri =event.target.value
        this.setState({
            [name]:giatri
        });
        
    }
    savebuttun  =() =>{
        var info={};
        
        info.ten=this.state.ten;
        info.sdt=this.state.sdt;
        info.quyen=this.state.quyen;
        
        this.props.dulieuforapp1(info);
        this.props.setchuyendoiLuufile2();
    }
    Chuyendoi2 =() =>{
        if(this.props.trangthaicd===false)
        {
            return(
                <form>
                    <div className="card border-primary mb-3 mt-3 bg-warning text-white">
                        <div className="card-header">Sửa Nội dung User</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <div className="input-group">
                            <input onChange={(event)=>{this.ischange(event)}} defaultValue={this.props.userObject.ten} name="ten" className="form-control" type="text"  placeholder="Tên"  />
                            </div>  
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                            <input onChange={(event)=>{this.ischange(event)}} defaultValue={this.props.userObject.sdt} name="sdt" className="form-control" type="text"  placeholder="Điện Thoại"  />
                            </div>  
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                            <input onChange={(event)=>{this.ischange(event)}} defaultValue={this.props.userObject.quyen} name="quyen" className="form-control" type="text"  placeholder="Hành Động"  />
                            </div>  
                        </div>
                        <input type="buttun" onClick={()=>this.savebuttun()} className="btn btn-info" value="Thêm"/>
                        </div> 
                    </div>
                </form>
            )
        }
    }
    render() {
        
        return (
            <div>
                {this.Chuyendoi2()}
            </div>
            
        )
            
                
             
        
    }
}

export default LuuData;