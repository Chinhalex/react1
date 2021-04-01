import React, { Component } from 'react';

class Col_3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            ten:"",
            sdt:"",
            quyen:""
        }
    }
    ichange=(event)=>{
        const ten=event.target.name;
        const giatri=event.target.value;
        this.setState(
            {
            
                [ten]:giatri  
            }
        );
    
        
    }
    
    
    
   hienthiForm=()=>{
       
       if(this.props.hienthiForm===false)
       {
           return (
            <div className="col">
                <form>
                <div className="card border-primary mb-3 mt-3">
                    <div className="card-header">Thêm mới</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <div className="input-group">
                        <input onChange={(event)=>this.ichange(event)} name="ten"className="form-control" type="text"  placeholder="Tên"  />
                        </div>  
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                        <input onChange={(event)=>this.ichange(event)} name="sdt" className="form-control" type="text"  placeholder="Điện Thoại"  />
                        </div>  
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                        <input onChange={(event)=>this.ichange(event)} name="quyen" className="form-control" type="text"  placeholder="Hành Động"  />
                        </div>  
                    </div>
                    <input type="reset" className="btn btn-info" onClick={(id,ten,sdt,quyen)=>this.props.add(this.state.id,this.state.ten,this.state.sdt,this.state.quyen)} value="Thêm"/>
                    </div> 
                </div>
                </form>
             </div>
           )
       }
   }
            

    
    render() {
        
        return (
            
                <div className="card">
                   
                    {this.hienthiForm()}
                  
            </div>
        );
    }
}

export default Col_3;