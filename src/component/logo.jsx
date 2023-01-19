import React,{Component} from "react";
import {FaHistory,FaTv,FaSpinner,FaBars} from "react-icons/fa"
import {FiCheckSquare} from "react-icons/fi"
{/* <FontAwesomeIcon icon="fa-solid fa-album-collection" /> */}
class Logo extends Component{
    state={

    }
    render(){
        return(
            <div className="container "   style={{marginTop:"25px"}}>
           <div className="A"  style={{marginTop:"5px"}}><spn style={{marginLeft:"20px"}}> <FiCheckSquare size={30} /></spn><br/>
           <h5>Collection</h5>
           </div>
           <div className="A"   style={{marginTop:"5px"}}><spn style={{marginLeft:"20px"}}> <FaSpinner size={30} /></spn><br/>
           <h5>Api's</h5>
           </div>
           <div className="A"  style={{marginTop:"5px"}}><spn style={{marginLeft:"20px"}}> <FaTv size={30} /></spn><br/>
           <h5>Monitors</h5>
           </div>
           <div className="A"  style={{marginTop:"5px"}}><spn style={{marginLeft:"20px"}}> <FaBars size={30} /></spn><br/>
           <h5>Flow's</h5>
           </div>
           <div className="A"  style={{marginTop:"5px"}}><spn style={{marginLeft:"20px"}}> <FaHistory size={30} /></spn><br/>
           <h5>History</h5>
           </div>
            </div>
        )
    }
}


export default Logo;