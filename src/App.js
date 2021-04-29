import './App.css';
import React from 'react';
import logo from './logo.svg';
import App2 from './login'
import App3 from './movies'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Header,Menu} from './header'
import App1 from './todolist'



class App extends React.Component{
  //  render(){

  // return (
  //   <div className="App">
  //     <Rout />
      
  //   </div>
  // );
  // }

  constructor(){
    super();
    this.state = {
        items:[
        
        {
            text:"Login",
            link:"/login"
        },
        {
            text:"movies",
            link:"/movies"
        },

        {
          text:"TodoList",
          link:"/todolist"
      },
     
    ]
}
}

toggleActive=(text)=>{
    this.state.items.forEach((item)=>item.active=false);
    let item = this.state.items.find(x=>x.text==text);
    item.active = !item.active
    this.setState({items:this.state.items});
}

render(){
    return <Router>
        <Header title="React Website" logo={logo} menu={this.state.items} toggleActive={this.toggleActive} />
        <Switch>
        <Route path="/todolist" >
                <App1 />
            </Route>
            <Route path="/movies" >
                <App3 />
            </Route>
            <Route path="/login" >
                <App2 />
            </Route>
            
        </Switch>
    </Router>
}

}

export default App;