import React,{Component} from "react";

class Body extends Component{
    state={
        view:0,
        radioData:"",
        option:["none","form-data","x-www-form-urlencoded","raw","binary","GraphQL"]

    }


      handleheader = () => {
        let s1 = { ...this.state };
        s1.view = 1;
 
        this.setState(s1);
      };
      handleBody = () => {
        let s1 = { ...this.state };
        s1.view = 0;
        this.setState(s1);
      };
    
render(){
    const {body,handleBodyData,handleHeaderData}=this.props;
    const {view,option,radioData}=this.state
    const {headerKey1,headerValue1,headerDescription1,headerKey2,headerValue2,headerDescription2,headerKey3,headerValue3,headerDescription3}=this.props.headerData
    return(
        view === 0 ? (
            <div className="conatiner">
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-5">
                  <button className="btn btn-sm " >
                    Query-Params
                  </button>
                  <button className="btn btn-sm " onClick={this.handleheader}>
                    Hedears
                  </button>
                  <button className="btn btn-sm " onClick={this.handleBody}>
                    body
                  </button>
                </div>
                <div className="col-7"></div>
              </div>
              <h6>body</h6>
              {option.map(d=>(
        <div className='form-check form-check-inline'>
    <input  className="form-check-input" type="radio" name="radioData" value={d} checked={radioData===d}  />   
   <label className="form-check-label">{d}</label>
    </div>
    ))}
                <div className="row">
                  <div className="container">
                    <div className="row" style={{ marginTop: "10px" }}>
                      <textarea
                        rows="4"
                        cols="8"
                        value={body}
                        onChange={handleBodyData}
                      ></textarea>
                    </div>
                  </div>
      
                </div>
            </div>
          ) : view === 1 ? (
            <div className="conatiner">
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-5">
                  <button className="btn btn-sm">
                    Query-Params
                  </button>
                  <button className="btn btn-s" onClick={this.handleheader}>
                  Hedears
                  </button>
                  <button className="btn btn-sm " onClick={this.handleBody}>
                    body
                  </button>
                </div>
                <div className="col-7"></div>
              </div>
              <h6>Hedears</h6>
              <div className="row">
                <div className="conatiner">

            
              <div className="row " >
                <div className="col-4 border">Key</div>
                <div className="col-4 border">Value</div>
                <div className="col-4 border">Description</div>
              </div>
              <div className="row ">
             
                <div className="col-4">
                <div className="form-group">
                    <input className="form-control" id="headerKey1"  name="headerKey1" value={headerKey1}   placeholder="key"  onChange={handleHeaderData} />
                </div>
                </div>
                <div className="col-4" >
                <div className="form-group">
                <input className="form-control" id="headerValue1" name="headerValue1" value={headerValue1}   placeholder="value"  onChange={handleHeaderData} />
                </div>
                </div>
                <div className="col-4" >
                <div className="form-group">
                <input className="form-control" id="headerDescription1" name="headerDescription1" value={headerDescription1}   placeholder="Description"  onChange={handleHeaderData} />
                </div>
                </div>  
                </div>
         
              <div className="row ">
             
             <div className="col-4">
             <div className="form-group">
                 <input className="form-control" id="headerKey2"  name="headerKey2" value={headerKey2}   placeholder="key"  onChange={handleHeaderData} />
             </div>
             </div>
             <div className="col-4" >
             <div className="form-group">
             <input className="form-control" id="headerValue2" name="headerValue2" value={headerValue2}   placeholder="value"  onChange={handleHeaderData} />
             </div>
             </div>
             <div className="col-4" >
             <div className="form-group">
             <input className="form-control" id="headerDescription2" name="headerDescription2" value={headerDescription2}   placeholder="Description"  onChange={handleHeaderData} />
             </div>
             </div>
             </div>
             <div className="row" >
             
             <div className="col-4" >
             <div className="form-group">
                 <input className="form-control" id="headerKey3"  name="headerKey3" value={headerKey3}   placeholder="key"  onChange={handleHeaderData} />
             </div>
             </div>
             <div className="col-4" >
             <div className="form-group">
             <input className="form-control" id="headerValue3" name="headerValue3" value={headerValue3}   placeholder="value"  onChange={handleHeaderData} />
             </div>
             </div>
             <div className="col-4" >
             <div className="form-group">
             <input className="form-control" id="headerDescription3" name="headerDescription3" value={headerDescription3}   placeholder="Description"  onChange={handleHeaderData} />
             </div>
             </div>
            </div>
            </div>
              </div>
              </div>
           
          )  : (
            ""
          )
    )
}

}


export default Body;
