import logo from './logo.svg';
import './App.css';
import React from 'react';


class App2 extends React.Component{

    constructor(props){
        super();
        this.state={
            // username:"",
            password:"",
            email:""
        }
    }

   
    setInputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    login=async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson = await res.json();
        if(resJson.token){
             alert("Login success");
            
        }else{
            alert(resJson.error)
        }
    }

    render(){
        return <div class="form-group w-50 m-auto">
            <h1>Login</h1>
            {/* Username:<input type="text" value={this.state.username} onChange={this.setInputValue} name="username" /><br/> */}
            Email<input class="form-control" type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email" /><br/>

            Password<input class="form-control" type="password" value={this.state.password} onChange={this.setInputValue} name="password" /><br/>
            <button class="btn btn-info btn-block" onClick={this.login}>Login</button>
        </div>
    }
}



export default App2;