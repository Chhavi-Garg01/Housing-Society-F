import React, {Component} from "react";

class Auth extends Component{
    login(){
        fetch('http://127.0.0.1:8000/login',{
            method:"POST",
            headers: {
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                localStorage.setItem("auth",JSON.stringify(resp.access))
            })
        })
    }
    render(){
        return(
            <div>
                <div>
                    <input type="text" onChange={(e)=>this.setState({username:e.target.value})} /><br /><br />
                    <input type="text" onChange={(e)=>this.setState({password:e.target.value})} /><br /><br />
                    <button onClick={()=>this.login()}>LOGIN</button>
                </div>
            </div>
        )
    }
}
export default Auth;