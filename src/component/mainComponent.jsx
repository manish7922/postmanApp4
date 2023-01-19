import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React,{Component} from "react";
import Form from "./form";
import Body from "./body";
import Response from "./response";
import Logo from "./logo";
import {getData} from "../services/httpServices"
class MainComponent  extends Component{
    state={
        body:"{\n\t\n}",
        response:"",
        time:"",
        status:"",
      headerData:{  headerKey1: "",headerValue1: '',headerDescription1: '',headerKey2: '',headerValue2: '',headerDescription2: '',headerKey3: '',headerValue3: '',headerDescription3: ''}

    }

    handleBody=(e)=>{
        const { value } = e.target;
        this.setState({body: value})
    }

    handleHeader=(e)=>{
        const { name, value } = e.target;
        let s1={...this.state}
      s1.headerData[name]=value;
        this.setState(s1)
    }

    handleData= async(data)=>{
        console.log(data);
        const {formMethod ,formUrl}=data;
        let bodyData=this.state.body.toString();
        let JsonText=JSON.parse(bodyData)
        //  let hedearData1=this.state.headerData.toString()
        let header1=JSON.stringify(this.state.headerData)
        console.log(header1);
         let hedearData2=JSON.parse(header1)
         console.log(hedearData2);
         let obj1={}
         obj1[header1]=hedearData2;
         console.log(obj1);
         debugger
        const request = {
            url: formUrl,
            method: formMethod,
            payload:JsonText,
            header:hedearData2
          };
console.log(request.header);
          const start=Date.now();
    const res = await getData(request);
console.log(res);

this.setState({response:res.data,status:res.status,time:Date.now()-start})

    }



    render(){
        const {body,response,status,time,headerData}=this.state
        console.log(this.state.body);
        console.log(headerData);
        return(
            <div className="container bg-light" style={{marginTop:"10px"}}>
                <div className="row">
                    <div className="col-4 border">
                        <Logo />
                    </div>
                    <div className="col-8 border">
                    <Form  onSumbit={this.handleData}  />
             <Body  body={body} handleBodyData={this.handleBody} headerData={headerData} handleHeaderData={this.handleHeader}  />
             <Response response={response} status={status} time={time} />
                    </div>
                </div>

            </div>
        )
    }
}

export default MainComponent;