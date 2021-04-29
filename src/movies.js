import logo from './logo.svg';
import './App.css';
import React from 'react';

class App3 extends React.Component{

    constructor(props){
        super();
        this.state={
        }
    }

    render(){
        return <div>
            <UserList />
        </div>
    }
}

class UserList extends React.Component{

    constructor(){
        super();
        this.state={
            users:[],
            loading:false
        };
    }

    async componentDidMount(){
        this.setState({loading:true});
        // setTimeout(async ()=>{
        let res= await fetch("https://reqres.in/api/users?page=1",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        });
        let resJson = await res.json();
        this.setState({users:resJson.data,loading: false});
    // },5000)
    }

    render(){
        return <div>
            {!this.state.loading ? this.state.users.map((item)=>{
                return <UserView key={item.id}  user={item} />
            }): "Loading Users"}
        </div>
    }
}

class UserView extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        return <div>
            <img src={this.props.user.avatar} style={{width:100,height:100}} /><br/>
            <span>{this.props.user.first_name} {this.props.user.last_name}</span>
            <div>Email : {this.props.user.email}</div>
        </div>
    }
}

export default App3;