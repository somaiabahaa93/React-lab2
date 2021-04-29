import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
class Header extends React.Component{

    render(){
        let h1Style={
            display:"inline",
            color:"#gray"
        }

        return <div class="text-center">
            <img style={{width:50,height:50}} src={this.props.logo} />
            <h1 style={h1Style} >{this.props.title}</h1>
            <Menu items={this.props.menu} toggleActive={this.props.toggleActive} />
        </div>
    }
}

Header.defaultProps ={
    title:"Website"
}

Header.propTypes = {
    title:PropTypes.string
}

class Menu extends React.Component{

    constructor(props){
        super();
        
    }

    render(){
        return <div>
            {this.props.items.map((item,i)=>{
                return <Link key={item.text} style={{backgroundColor:item.active?"grey":"black", color:"white" , display: "inline-block" , padding: "4px" , overflow: "auto" , width:"20%"  } } onClick={()=>this.props.toggleActive(item.text)} to={item.link} > {item.text} </Link>
            })}
        </div>
    }
}

Menu.defaultProps={
    items:[]
}

export {Header,Menu};