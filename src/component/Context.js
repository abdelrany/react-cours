import React, { Component } from 'react'
import axios from 'axios';
const Context =React.createContext();
    
const reducer =(state, action) => {
    switch (action.type) {
        case 'DELETE':
            return  {
                contacts: state.contacts.filter((contact)=> contact.id !==action.payload)
            };
            case 'ADD':
            return  {
                contacts: [action.payload,...state.contacts]
            };
        default:
            return state;
    }
}


export  class Provider extends Component {
    state ={

        contacts:[
            {id:1,name:"abdel",phone:"0606060606",email:"abdel@gmail.com"},
            {id:2,name:"kamal",phone:"0606060606",email:"kamal@gmail.com"},
            {id:3,name:"yassin",phone:"0606060606",email:"yassin@gmail.com"}
        ],
        dispatch: action=> this.setState(state => reducer(state, action))
    }
    async componentDidMount(){
       const res =await axios.get('https://jsonplaceholder.typicode.com/users')
       this.setState({
        contacts:res.data})
    }
  render() {
    return (
        
        <Context.Provider value={this.state}>
          {this.props.children}
    
        </Context.Provider>
    
    )
  }
}
export const Consumer =Context.Consumer;
