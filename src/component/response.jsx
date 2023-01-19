import React,{Component} from "react";

class Response extends Component {
    state={}

    render(){
        const {response,status,time}=this.props
        let data=JSON.stringify(response)
        return(
            <div>
            <h5>Response  <span style={{marginLeft:"260px"}} >status:{status} Time:{time}</span> </h5>
            <div className="row">
            <textarea rows="5" cols="90"  value={data}   ></textarea>
            </div>
            </div>
        )
    }
}


export default Response;