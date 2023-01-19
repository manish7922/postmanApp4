import React,{Component} from "react";

class Form extends Component {
    state={
        form:{formMethod:"GET",formUrl:""},
        Method: ["GET", "POST","PUT","DELETE"],
    }

    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.form[input.name]=input.value;
        this.setState(s1);
    }

    handleSumbit=(e)=>{
        e.preventDefault();
        this.props.onSumbit(this.state.form);
    }


    render() {
        const {formMethod ,formUrl}=this.state.form
        const {Method}=this.state
        return (
            <div className="row">
              <div className="col-2" >
                <div className="form-group">
                    <select  className="form-control"   name="formMethod" value={formMethod}  onChange={this.handleChange}>
                      {Method.map((m)=>(
                        <option>{m}</option>
                      ))}
                    </select>
                </div>
              </div>
              <div className="col-7" style={{marginLeft:"-24px"}}>
                <div className="form-group">
                    <input className="form-control"  id="formUrl" name="formUrl" value={formUrl} placeholder="Enter the url" onChange={this.handleChange} />
                </div>
              </div>
              <div className="col-3" style={{marginLeft:"-24px"}}>
                <button className="btn btn-primary btn-sm" onClick={this.handleSumbit}>Sumbit</button>
              </div>
            </div>
        )
    }
}


export default Form;