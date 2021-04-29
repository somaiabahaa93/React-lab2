// import logo from './logo.svg';
import './App.css';
import React from 'react';


class App1 extends React.Component {
    constructor(){
        super();
        this.state={
            lists:[]
        }
    }

    addList=(list)=>{
        this.state.lists.push(list);
        this.setState({lists:this.state.lists});
        // this.saveToLocalStorage();
    }


  render(){
  return (
      <div class="m-auto text-center">
    <h1> Welcome To Our ToDoList</h1>
    <DisplayLists lists={this.state.lists} />
            <AddList addList={this.addList} />
    </div>
  );
  }
}

class AddList extends React.Component{

    constructor(props){
        super();
        this.state={
            task:"",
        }
    }

    addList=()=>{
        let list = {
            task:this.state.task,
        }

        this.props.addList(list);
    }

    render(){
        return <div class="input-group w-50 mx-auto mt-5">
           <strong class="text-danger"> Task </strong> <input type="text" class="form-control ml-1" value={this.state.task} onChange={(e)=>this.setState({task:e.target.value})} />
            
            <button class="btn btn-outline-secondary" onClick={this.addList} >Add</button>
        </div>
    }
}


class DisplayLists extends React.Component{
    render(){
        return <div>
            {this.props.lists.length > 0 ?this.props.lists.map((item)=>{
                return <DisplayList list={item} key={item.task} />
            }):""}
        </div>
    }
}

DisplayLists.defaultProps={
    lists:[]
}

class DisplayList extends React.Component{
    render(){
        return <div class="w-50 m-auto  ">
            
             <ul class="list-group ">
               <li class="list-group-item list-group-item-primary ">{this.props.list.task} <br/></li>
            </ul>
          
        </div>
    }
}

export default App1;
